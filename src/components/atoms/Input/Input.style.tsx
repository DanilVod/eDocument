import styled, { css } from 'styled-components'

import { InputProps, inputStatus } from './Input'
import { ColorsName, colors } from '@/constants/global.styles'

const ErrorStatus = css`
	border: 1px solid ${colors['red']};
	background-color: ${colors['white']};
	color: ${colors['black']};
	:hover {
		border: 1px solid ${colors['red']};
		background-color: ${colors['white']};
	}
	:focus {
		border: 1px solid ${colors['red']};
		background-color: ${colors['white']};
	}
`
const WarningStatus = css`
	border: 1px solid ${colors['red']};
	background-color: ${colors['white']};
	:hover {
		border: 1px solid ${colors['red']};
		background-color: ${colors['white']};
	}
	:focus {
		border: 1px solid ${colors['red']};
		background-color: ${colors['white']};
	}
`

const handleInputStatus = (status: inputStatus) => {
	switch (status) {
		case 'error':
			return ErrorStatus
		case 'warning':
			return WarningStatus
		case 'none':
			return css``
		default:
			return css``
	}
}

export const StyledInput = styled.input<Pick<InputProps, 'placeholder' | 'status' | 'width' | 'disabled'>>`
	/* border: 1px solid ${colors['TextLightGray']}; */
	border-radius: 4px;
	background-color: ${colors['TableTitleGrayBG']};
	height: 36px;
	padding-left: 16px;
	padding-right: 32px;
	color: ${colors['TextLightGray']};
	width: ${({ width = '' }) => width};

	:hover {
		border: 1px solid ${colors['BorderGray']};
	}
	:focus {
		border: 1px solid ${colors['BorderGray']};
		background-color: ${colors['white']};
		outline: none;
		color: ${colors['black']};
	}
	:disabled {
		color: ${colors['DisabledGray']};
		border: none;
	}
	${({ status = 'none' }) => handleInputStatus(status)}
`

export const StyledLabel = styled.label`
	/* border: 1px solid #000; */
	margin-right: 60px;
`

export const InputContainer = styled.div`
	display: flex;
	align-items: baseline;
`

export const InputValueContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

// export interface iconProps {
// 	onClick?: () => void
// 	color?: ColorsName
// }

export const IconInputContainer = styled.div`
	margin: 0 8px;
	position: absolute;
	/* svg path {
		stroke: ${colors['TextLightGray']};
	} */
`
export const IconCloseContainer = styled.div`
	margin: 0 8px;
	position: absolute;
	:hover {
		cursor: pointer;
	}
	svg path {
		stroke: ${colors['TextLightGray']};
	}
`
