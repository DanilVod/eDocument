import React, { FC, ReactNode } from 'react'

import { IconButtonContainer, StyledButton, sizes } from './Button.style'

export type buttonType = 'primary' | 'ghost' | 'secondary'

export type ButtonSize = keyof typeof sizes

export interface ButtonProps {
	children: ReactNode
	_type?: buttonType
	onClick: () => void
	size?: ButtonSize
	disabled?: boolean
	icon?: JSX.Element
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
	return (
		<StyledButton {...props}>
			{props.children}
			<IconButtonContainer>{props.icon}</IconButtonContainer>
		</StyledButton>
	)
}

export default Button
