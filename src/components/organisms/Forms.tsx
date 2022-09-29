import React, { FC, ReactNode, useState } from 'react'

import { Button, Typography } from '../atoms'
import Input from '../atoms/Input/Input'
import Select from '../atoms/Select/Select'
import DataPicker from '../molecules/DataPicker/DataPicker'

import { errors } from '@/validations/errors'

type FormComponents = typeof Input | typeof Select | typeof DataPicker

export interface formConfig {
	component: FormComponents
	values: InputParameters | DataPickerParameters | SelectParameters
}

type Errors = {
	[error in keyof typeof errors]?: string
}

type InputParameters = Parameters<typeof Input>[0] & { list?: never }
type DataPickerParameters = Parameters<typeof DataPicker>[0] & { list?: never; placeholder?: never }
type SelectParameters = Parameters<typeof Select>[0]

interface IForm {
	formConfig: formConfig[]
	children?: ReactNode
	width?: string
	onSubmit: () => void
	data: unknown
}

const Forms: FC<IForm> = ({ formConfig, width, onSubmit }) => {
	const initErrors: Errors = Object.keys(errors).reduce((a, v) => ({ ...a, [v]: '' }), {})
	const [fieldErrors, setFieldErrors] = useState<Errors>(initErrors)

	function isErrors(obj: Errors) {
		for (const key in obj) {
			const k = key as keyof typeof errors
			if (obj[k] !== null && obj[k] != '') return true
		}
		return false
	}

	const handleSubmit = () => {
		let fieldErrs = fieldErrors
		formConfig.map((formItem) => {
			const name = formItem.values.name as keyof typeof errors
			if (formItem.component === DataPicker) {
				const values = formItem.values as Parameters<typeof DataPicker>[0]
				if (values.required && (!values.value.to || !values.value.from)) {
					fieldErrs = { ...fieldErrs, [values.name]: errors[name]['isNotField'] }
				}
			} else if (formItem.component === Input) {
				const values = formItem.values as Parameters<typeof Input>[0]

				if (values.required && !values.value) {
					fieldErrs = { ...fieldErrs, [values.name]: errors[name]['isNotField'] }
				}
			} else if (formItem.component === Select) {
				const values = formItem.values as Parameters<typeof Select>[0]
				if (values.required && ((!values.value.length && values.multy) || !values.value)) {
					fieldErrs = { ...fieldErrs, [values.name]: errors[name]['isNotField'] }
				}
			}
		})
		setFieldErrors(fieldErrs)
		return fieldErrs
	}

	const selectComponent = (formItem: formConfig, index: number) => {
		const name = formItem.values.name as keyof typeof errors
		if (formItem.component === DataPicker) {
			const values = formItem.values as Parameters<typeof DataPicker>[0]

			return (
				<DataPicker
					{...values}
					key={index}
					error={fieldErrors[name]}
					setFormError={(error) => {
						setFieldErrors({ ...fieldErrors, [formItem.values.name]: error })
					}}
				/>
			)
		} else if (formItem.component === Input) {
			const values = formItem.values as Parameters<typeof Input>[0]
			return (
				<Input
					{...values}
					key={index}
					error={fieldErrors[name]}
					setFormError={(error) => {
						setFieldErrors({ ...fieldErrors, [formItem.values.name]: error })
					}}
				/>
			)
		} else if (formItem.component === Select) {
			const values = formItem.values as Parameters<typeof Select>[0]
			return (
				<Select
					{...values}
					key={index}
					error={fieldErrors[name]}
					setFormError={(error) => {
						setFieldErrors({ ...fieldErrors, [formItem.values.name]: error })
					}}
				/>
			)
		}
	}
	return (
		<div style={{ width: width }}>
			{formConfig.map((formItem, index) => selectComponent(formItem, index))}
			<Button
				onClick={() => {
					const fieldErrs = handleSubmit()
					if (!isErrors(fieldErrs)) onSubmit()
				}}
				disabled={isErrors(fieldErrors)}
				size="small"
				_type="primary"
			>
				<Typography type="p-large">Отправить</Typography>
			</Button>
		</div>
	)
}

export default Forms

// const StyledForm = styled.div`
// 	width: ;
// `
