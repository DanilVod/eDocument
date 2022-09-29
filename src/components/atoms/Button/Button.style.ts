import styled, { css } from 'styled-components'

import { rootValues } from '../../../constants/global.styles'

import { ButtonProps, buttonType } from './Button'
import { colors } from '@/constants/global.styles'

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

export const IconButtonContainer = styled.div`
	margin-left: ${rootValues['smallPd']};
	svg path {
		stroke: ${colors['white']};
	}
`

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
	background-color: ${colors['SElifeGreen']};
	color: ${colors['white']};

	:hover {
		background-color: ${colors['GreenBright']};
	}

	:active {
		background-color: ${colors['SElogoGreen']};
	}

	:disabled {
		background-color: ${colors['LightGray']};
		color: ${colors['DisabledGray']};
		svg path {
			stroke: ${colors['DisabledGray']};
		}
	}
`

const GhostButton = css`
	background: none;
	color: ${colors['SElifeGreen']};
	border: 1px solid ${colors['SElifeGreen']};
	:hover {
		color: ${colors['GreenBright']};
		border: 1px solid ${colors['GreenBright']};
		cursor: pointer;
	}

	:active {
		color: ${colors['SElogoGreen']};
		border: 1px solid ${colors['SElogoGreen']};
	}

	:disabled {
		color: ${colors['SELightGray']};
		border: 1px solid ${colors['DisabledGray']};
		svg path {
			stroke: ${colors['DisabledGray']};
		}
	}
`

const SecondaryButton = css`
	background: none;
	border: none;
	color: ${colors['SElifeGreen']};
	:hover {
		color: ${colors['GreenBright']};
		cursor: pointer;
	}

	:active {
		color: ${colors['SElogoGreen']};
	}

	:disabled {
		color: ${colors['SELightGray']};
		svg path {
			stroke: ${colors['DisabledGray']};
		}
	}
`

export const StyledButton = styled.button<Pick<ButtonProps, '_type' | 'size'>>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${rootValues['radius']};
	padding: 0 ${rootValues['mediumPd']};
	${({ size = 'large' }) => sizes[size]};
	${({ _type = 'primary' }) => handleButtonType(_type)}
`
