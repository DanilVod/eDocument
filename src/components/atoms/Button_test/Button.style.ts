import styled, { css } from 'styled-components'

import { ButtonProps, buttonType } from './Button'
import { colors } from '@/constants/global.styles'

const handleButtonType = (type: buttonType) => {
	switch (type) {
		case 'empty':
			return EmptyButton
		case 'outlined':
			return OutlinedButton
		default:
			return NormalButton
	}
}
const NormalButton = css`
	background-color: ${colors['accentBlue']};
	box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
	color: ${colors['white']};
	:hover {
		background-color: #34aff9;
		box-shadow: 0px 8px 16px rgba(52, 175, 249, 0.2);
	}
	:active {
		background-color: #098edf;
		box-shadow: 0px 2px 6px rgba(9, 142, 223, 0.3);
	}
`
const OutlinedButton = css`
	border: 1px solid ${colors['accentBlue']};
	color: ${colors['accentBlue']};
	:hover {
		color: #34aff9;
		border: 1px solid #34aff9;
	}
	:active {
		color: #098edf;
		border: 1px solid #098edf;
	}
`
const EmptyButton = css`
	border: none;
	background-color: transparent;
	color: ${colors['accentBlue']};
	:hover {
		color: #34aff9;
	}
	:active {
		color: #098edf;
	}
`

export const StyledButton = styled.div<Pick<ButtonProps, 'type' | 'color'>>`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 162px;
	height: 42px;
	border-radius: 4px;
	font-family: 'Poppins';
	font-weight: 500;
	color: ${({ color = 'none' }) => colors[color]};
	:hover {
		cursor: pointer;
	}
	${({ type = 'normal' }) => handleButtonType(type)}
`
