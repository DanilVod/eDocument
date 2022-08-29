import styled, { css } from 'styled-components'

import { ButtonProps, buttonType, sizes } from './Button'
import { colors } from '@/constants/global.styles'

const handleButtonType = (type: buttonType) => {
	switch (type) {
		case 'primary':
			return PrimaryButton
		case 'ghost':
			return GhostButton
		case 'secondary':
			return SecondaryButton
		default:
			return PrimaryButton
	}
}

const PrimaryButton = css`
	border: none;
	color: white;
`

const GhostButton = css`
	background: none;
`

const SecondaryButton = css`
	background: none;
	border: none;
`

export const StyledButton = styled.button<Pick<ButtonProps, 'bgColor' | 'color' | 'type' | 'size'>>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	background-color: ${({ bgColor = 'SElifeGreen' }) => colors[bgColor]};
	border: 1px solid ${({ bgColor = 'SElifeGreen' }) => colors[bgColor]};
	color: ${({ color = 'white' }) => colors[color]};
	${({ size = 'large' }) => sizes[size]};
	${({ type = 'primary' }) => handleButtonType(type)}

	:hover {
		background-color: ${colors['GreenBright']};
		border: 1px solid ${colors['GreenBright']};
		color: ${colors['GreenBright']};

		${({ type = 'primary' }) => handleButtonType(type)};
	}

	:active {
		background-color: ${colors['SElogoGreen']};
		border: 1px solid ${colors['SElogoGreen']};
		color: ${colors['SElogoGreen']};

		${({ type = 'primary' }) => handleButtonType(type)}
	}

	:disabled {
		background-color: ${colors['LightGray']};
		border: 1px solid ${colors['DisabledGray']};
		color: ${colors['DisabledGray']};

		${({ type = 'primary' }) => handleButtonType(type)}
	}
`

// const handleButtonType = (type: buttonType) => {
// 	switch (type) {
// 		case 'primary':
// 			return PrimaryButton
// 		case 'ghost':
// 			return GhostButton
// 		case 'secondary':
// 			return SecondaryButton
// 		default:
// 			return PrimaryButton
// 	}
// }

// const PrimaryButton = css`
// 	border: none;
// 	color: white;
// `

// const GhostButton = css`
// 	background: none;
// `

// const SecondaryButton = css`
// 	background: none;
// 	border: none;
// `

// export const StyledButton = styled.button<Pick<ButtonProps, 'bgColor' | 'color' | 'type' | 'size'>>`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	border-radius: 4px;
// 	background-color: ${({ bgColor = 'SElifeGreen' }) => colors[bgColor]};
// 	border: 1px solid ${({ bgColor = 'SElifeGreen' }) => colors[bgColor]};
// 	color: ${({ color = 'white' }) => colors[color]};
// 	${({ size = 'large' }) => sizes[size]};
// 	${({ type = 'primary' }) => handleButtonType(type)}

// 	:hover {
// 		background-color: ${colors['GreenBright']};
// 		border: 1px solid ${colors['GreenBright']};
// 		color: ${colors['GreenBright']};

// 		${({ type = 'primary' }) => handleButtonType(type)};
// 	}

// 	:active {
// 		background-color: ${colors['SElogoGreen']};
// 		border: 1px solid ${colors['SElogoGreen']};
// 		color: ${colors['SElogoGreen']};

// 		${({ type = 'primary' }) => handleButtonType(type)}
// 	}

// 	:disabled {
// 		background-color: ${colors['LightGray']};
// 		border: 1px solid ${colors['DisabledGray']};
// 		color: ${colors['DisabledGray']};

// 		${({ type = 'primary' }) => handleButtonType(type)}
// 	}
// `
