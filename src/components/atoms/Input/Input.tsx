import { useWhyDidYouUpdate } from 'ahooks'
import React, { FC, useEffect, useRef, useState } from 'react'

import useDebounce from '@/hooks/useDebounce'

import { IValidations } from '@/types/IValidations'

import CalendarIcon from '@/assets/icons/Calendar.svg?component'
import CloseIcon from '@/assets/icons/Close.svg?component'
import ErrorIcon from '@/assets/icons/Error.svg?component'

import { Typography } from '../Typography/Typography'

import { IconCalendarContainer, IconCloseContainer, IconInputContainer, InputContainer, InputValueContainer, StyledInput, StyledLabel } from './Input.style'
import generateErrorMes from './utils/generateErrorMes'
import { validate } from './utils/validate'

export interface InputProps {
	placeholder: string
	value?: string
	name: string
	// onClick?: () => void
	label: string
	disabled?: boolean
	width?: string
	onChange: (name: string, value: string, error: string) => void
	error?: string
	type?: string
	// readonly _ref?: React.RefObject<HTMLInputElement>
	validations?: IValidations
}

export const Input: FC<InputProps> = (props: InputProps) => {
	const [value, setValue] = useState<string>('')
	const [error, setError] = useState<string>('')
	const isFirstRender = useRef(true)
	const required = props.validations && props.validations.required && props.validations.required.value

	const errorMessages = generateErrorMes(props.validations)

	const updateFormValue = useDebounce(() => {
		props.onChange(props.name, value, error)
	}, 1000)

	const clearValue = () => {
		setValue('')
		if (required) {
			setError(errorMessages.required)
		}
	}

	const handleBlur = () => {
		if (required && !value) {
			setError(errorMessages.required)
		}
	}

	useEffect(() => {
		if (!isFirstRender.current) updateFormValue()
		const err = validate(errorMessages, value, props.validations)
		if (err !== undefined) setError(err)

		isFirstRender.current = false
	}, [value, error])

	const addSuffixIcon = () => {
		let icon
		if (props.type === 'date') icon = <CalendarIcon />
		else if (error) icon = <ErrorIcon />
		else if (value) icon = <CloseIcon />

		return (
			<IconCalendarContainer
				onClick={() => {
					if (value) clearValue()
				}}
			>
				{icon}
			</IconCalendarContainer>
		)
	}

	return (
		<InputContainer>
			{props.label && (
				<Typography type="p-medium" color="TextLightGray">
					<StyledLabel>{props.label}</StyledLabel>
				</Typography>
			)}
			<div style={{ width: '100%' }}>
				<InputValueContainer>
					<Typography isInput type="p-medium" color="TextLightGray">
						<StyledInput
							{...props}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setValue(e.target.value)
							}}
							onBlur={handleBlur}
							error={error}
							value={value}
						/>
					</Typography>
					{addSuffixIcon()}
				</InputValueContainer>
				<Typography type="p-medium" color="red">
					{error}
				</Typography>
			</div>
		</InputContainer>
	)
}
export default React.memo(Input)
