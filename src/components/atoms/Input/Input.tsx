import React, { FC, useEffect, useState } from 'react'

import CloseIcon from '@/assets/icons/Close.svg?component'
import ErrorIcon from '@/assets/icons/Error.svg?component'

import { Typography } from '../Typography/Typography'

import { IconCloseContainer, IconInputContainer, InputContainer, InputValueContainer, StyledInput, StyledLabel } from './Input.style'
import { errors } from '@/validations/errors'
import { patterns, typePattern } from '@/validations/patterns'

export interface InputProps {
	placeholder: string
	value: string
	name: string
	// clearValue: (name: string) => void | (() => void)
	label: string
	disabled?: boolean
	width?: string
	onChange: (name: string, value: string) => void
	required?: boolean
	error?: string
	// onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
	setFormError?: (err: string) => void
}

export const Input: FC<InputProps> = (props: InputProps) => {
	const [value, setValue] = useState<string>('')
	const [error, setError] = useState<string>('')
	const fieldName = props.name as keyof typeof patterns

	useEffect(() => {
		const re = new RegExp(patterns[fieldName], 'i')
		if (props.setFormError) {
			if (value && !re.test(value)) props.setFormError(errors[fieldName]['isNotValid'])
			else if (!props.required) props.setFormError('')
			else if (value && props.error) props.setFormError('')
		} else {
			if (value && !re.test(value)) setError(errors[fieldName]['isNotValid'])
			else if (!props.required) setError('')
		}

		props.onChange(props.name, value)
	}, [value])

	const handleBlur = () => {
		if (error != errors[fieldName]['isNotField'] && props.required && !value) {
			if (props.setFormError) props.setFormError(errors[fieldName]['isNotField'])
			else setError(errors[fieldName]['isNotField'])
		}
	}

	const addSuffixIcon = () => {
		if (error) {
			return (
				<IconInputContainer>
					<ErrorIcon />
				</IconInputContainer>
			)
		} else if (props.value) {
			return (
				<IconCloseContainer
					onClick={() => {
						setValue('')
						if (props.required) {
							if (props.setFormError) props.setFormError(errors[fieldName]['isNotField'])
							else setError(errors[fieldName]['isNotField'])
						}

						// if (error != errors[fieldName]['isNotField'] && props.required && value) {
						// 	setError(errors[fieldName]['isNotField'])
						// }
					}}
				>
					<CloseIcon />
				</IconCloseContainer>
			)
		}
	}

	return (
		<InputContainer>
			<Typography type="p-medium" color="TextLightGray">
				<StyledLabel>{props.label}</StyledLabel>
			</Typography>
			<div style={{ width: '100%' }}>
				<InputValueContainer>
					<Typography isInput type="p-medium" color="TextLightGray">
						<StyledInput
							{...props}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setValue(e.target.value)
								// if (error) props.onChange(props.name, e.target.value, false)
								// else props.onChange(props.name, e.target.value, true)
								// console.log(error)
							}}
							onBlur={handleBlur}
							error={error || props.error}
							value={value}
						/>
					</Typography>
					{addSuffixIcon()}
				</InputValueContainer>
				<Typography type="p-medium" color="red">
					{error || props.error}
				</Typography>
			</div>
		</InputContainer>
	)
}
export default Input
