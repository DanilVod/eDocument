import React, { FC, ReactNode } from 'react'
import { css } from 'styled-components'

import { StyledButton } from './Button.style'
import { ColorsName } from '@/constants/global.styles'

export type buttonType = 'primary' | 'ghost' | 'secondary'

export type ButtonSize = keyof typeof sizes

export const sizes = {
	small: css`
		min-width: 127px;
		height: 36px;
	`,
	medium: css`
		min-width: 101px;
		height: 52px;
	`,
	large: css`
		min-width: 149px;
		height: 52px;
	`
}

export interface ButtonProps {
	bgColor?: ColorsName
	color?: ColorsName
	children: ReactNode
	type?: buttonType
	onClick: () => void
	size?: ButtonSize
	disabled?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
