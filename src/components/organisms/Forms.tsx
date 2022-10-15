import { useWhyDidYouUpdate } from 'ahooks'
import React, { FC, ReactNode, useCallback, useMemo, useState } from 'react'

import { IDataPicker } from '@/types/IDataPicker'
import { IInput } from '@/types/IInput'

import { Button, Typography } from '../atoms'
import Input from '../atoms/Input/Input'
import Select from '../atoms/Select/Select'
import DataPicker, { DatePickerDate } from '../molecules/DataPicker/DataPicker'

import { errors } from '@/validations/errors'

type FormComponents = typeof Input | typeof Select | typeof DataPicker

export interface formConfig {
	component: FormComponents
	values: InputParameters | DataPickerParameters | SelectParameters
}

type componentType = 'select' | 'input' | 'dataPicker'

type Errors = {
	[error in keyof typeof errors]?: string
}

type InputParameters = IInput & {
	list?: never
	// componentType: componentType
}
type DataPickerParameters = IDataPicker & { list?: never; placeholder?: never }
type SelectParameters = Parameters<typeof Select>[0]

interface IForm {
	formConfig: formConfig[]
	children?: ReactNode
	width?: string
	onSubmit: (values: { [key: string]: unknown }) => void
	data: unknown
}

const getInitValue = ({ component, values }: formConfig) => {
	let value: string | string[] | DatePickerDate = ''
	if (component === Input) value = ''
	else if (component === Select) {
		const _values = values as SelectParameters
		if (_values.multy) value = []
		else value = ''
	} else if (component === DataPicker) value = { from: null, to: null }
	return value
}

const Forms: FC<IForm> = ({ formConfig, width, onSubmit }) => {
	const initErrors: Errors = Object.keys(errors).reduce((a, v) => ({ ...a, [v]: '' }), {})
	console.log(formConfig[0].values)
	const initValue: {
		[key: string]: any
	} = formConfig.reduce((a, item) => ({ ...a, [item.values.name]: getInitValue(item) }), {})

	const [formValues, setFormValues] = useState(initValue)
	const [fieldErrors, setFieldErrors] = useState<Errors>(initErrors)
	// useWhyDidYouUpdate('Forms', { formConfig, width, onSubmit, formValues, fieldErrors })
	// console.log(formValues)

	function isErrors(obj: Errors) {
		for (const key in obj) {
			const k = key as keyof typeof errors
			if (obj[k] !== null && obj[k] != '') return true
		}

		return false
	}

	const handleInputChange = useCallback((name = '', value: string, error = '') => {
		setFormValues((prevState) => ({ ...prevState, [name]: value }))

		setFieldErrors((prevState) => ({ ...prevState, [name]: error }))
	}, [])

	const handleDatePickerChange = useCallback((name = '', value: DatePickerDate, error = '') => {
		setFormValues((prevState) => ({ ...prevState, [name]: value }))
		// setFieldErrors((prevState) => ({ ...prevState, [name]: error }))
	}, [])

	const handleSelectChange = useCallback((name = '', value: string | string[]) => {
		setFormValues((prevState) => ({ ...prevState, [name]: value }))
	}, [])

	const isNotField = () => {
		let isNotValid = false

		formConfig.map((formItem) => {
			if (formItem.values.validations?.required) {
				if (formItem.component === DataPicker) {
					if (!formValues[formItem.values.name].to || !formValues[formItem.values.name].from) {
						isNotValid = true
					}
				} else if (formItem.component === Input) {
					if (!formValues[formItem.values.name]) {
						isNotValid = true
					}
				} else if (formItem.component === Select) {
					const values = formItem.values as Parameters<typeof Select>[0]
					if ((!formValues[formItem.values.name].length && values.multy) || !formValues[formItem.values.name]) {
						isNotValid = true
					}
				}
			} else return
		})

		return isNotValid
	}

	const isDisabled = useMemo(() => {
		return isErrors(fieldErrors) || isNotField()
	}, [formValues])

	const selectComponent = (formItem: formConfig, index: number) => {
		const name = formItem.values.name as keyof typeof errors
		if (formItem.component === DataPicker) {
			const values = formItem.values as Parameters<typeof DataPicker>[0]

			return <DataPicker {...values} key={index} onChange={handleDatePickerChange} />
		} else if (formItem.component === Input) {
			const values = formItem.values as Parameters<typeof Input>[0]
			return <Input {...values} key={index} onChange={handleInputChange} />
		} else if (formItem.component === Select) {
			const values = formItem.values as Parameters<typeof Select>[0]
			if (values.multy) return <Select {...values} onChange={handleSelectChange} key={index} />
			else return <Select {...values} onChange={handleSelectChange} key={index} error={fieldErrors[name]} />
		}
	}

	return (
		<div style={{ width: width }}>
			{formConfig.map((formItem, index) => selectComponent(formItem, index))}
			<Button
				onClick={() => {
					onSubmit(formValues)
				}}
				disabled={isDisabled}
				size="small"
				_type="primary"
			>
				<Typography type="p-large">Отправить</Typography>
			</Button>
		</div>
	)
}

export default Forms
