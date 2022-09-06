import { ReactNode } from 'react'
import React from 'react'

import { StyledButton } from './Button.style'
import { ColorsName } from '@/constants/global.styles'

export type buttonType = 'normal' | 'outlined' | 'empty'
export interface ButtonProps {
	color?: ColorsName
	onclick?: () => void
	type?: buttonType
	children: ReactNode
}

export const Button = (props: ButtonProps) => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}
