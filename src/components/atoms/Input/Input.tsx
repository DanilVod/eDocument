import React, { FC, ReactNode, useEffect, useRef } from 'react'

import CloseIcon from '@/assets/icons/Close.svg?component'
import ErrorIcon from '@/assets/icons/Error.svg?component'

import { Typography } from '../Typography/Typography'

import { IconCloseContainer, IconInputContainer, InputContainer, InputValueContainer, StyledInput, StyledLabel } from './Input.style'

export type inputStatus = 'error' | 'warning' | 'none'

export interface InputProps {
	placeholder: string
	value?: string
	setValue: (val: string) => void
	status?: inputStatus
	prefixIcon?: React.ReactNode
	suffixIcon?: React.ReactNode
	label?: string
	disabled?: boolean
	width?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props: InputProps) => {
	const addSuffixIcon = ({ status, value, setValue }: InputProps) => {
		if (status && status !== 'none') {
			return (
				<IconInputContainer>
					<ErrorIcon />
				</IconInputContainer>
			)
		} else if (value && status == 'none') {
			return (
				<IconCloseContainer onClick={() => setValue('')}>
					<CloseIcon />
				</IconCloseContainer>
			)
		}
	}

	const addStatusText = ({ status = 'none' }: InputProps) => {
		if (status == 'error') return <span>Поле заполнено некорректно</span>
		else if (status == 'warning') return <span>Пожалуйста, заполните это поле</span>
	}

	return (
		<InputContainer>
			<Typography type="p-medium" color="TextLightGray">
				<StyledLabel>FirstName</StyledLabel>
			</Typography>
			<div>
				<InputValueContainer>
					<Typography type="p-medium" color="TextLightGray">
						<StyledInput {...props} />
					</Typography>
					{addSuffixIcon(props)}
				</InputValueContainer>
				<Typography type="p-medium" color="red">
					{addStatusText(props)}
				</Typography>
			</div>
		</InputContainer>
	)
}

Input.defaultProps = {
	status: 'none'
}

export default Input
