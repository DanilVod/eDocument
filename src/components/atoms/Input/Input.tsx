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
	clearValue: (name: string) => void | (() => void)
	label: string
	disabled?: boolean
	width?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	error?: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props: InputProps) => {
	const [error, setError] = useState<string>('')
	const fieldName = props.name as keyof typePattern

	useEffect(() => {
		const re = new RegExp(patterns[fieldName], 'i')
		if (!re.test(props.value) && props.value) setError(errors[fieldName]['isNotValid'])
		else setError('')
	}, [props.value])

	const handleBlur = () => {
		if (props.required && !props.value) {
			setError(errors[fieldName]['isNotField'])
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
				<IconCloseContainer onClick={() => props.clearValue(props.name)}>
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
			<div>
				<InputValueContainer>
					<Typography isInput type="p-medium" color="TextLightGray">
						<StyledInput {...props} onBlur={handleBlur} error={error} />
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
export default Input
