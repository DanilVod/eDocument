import styled, { css } from 'styled-components'

import { InputProps } from './Input'
import { colors } from '@/constants/global.styles'

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
// const WarningStatus = css`
// 	border: 1px solid ${colors['red']};
// 	background-color: ${colors['white']};
// 	:hover {
// 		border: 1px solid ${colors['red']};
// 		background-color: ${colors['white']};
// 	}
// 	:focus {
// 		border: 1px solid ${colors['red']};
// 		background-color: ${colors['white']};
// 	}
// `

const handleInputStatus = (error: string) => {
	if (error) {
		return ErrorStatus
	}
	// switch (status) {
	// 	case 'error':
	// 		return ErrorStatus
	// 	case 'warning':
	// 		return WarningStatus
	// 	case 'none':
	// 		return css``
	// 	default:
	// 		return css``
	// }
}

export const StyledInput = styled.input<Pick<InputProps, 'error'>>`
	/* border: 1px solid ${colors['TextLightGray']}; */
	border-radius: 4px;
	background-color: ${colors['TableTitleGrayBG']};
	height: 36px;
	padding-left: 16px;
	padding-right: 32px;
	color: ${colors['black']};
	/* width: 100%; */
	width: ${({ width = '400px' }) => width};

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
	::-webkit-input-placeholder {
		color: ${colors['TextLightGray']};
	}
	${({ error = '' }) => handleInputStatus(error)}
`

export const StyledLabel = styled.div`
	/* border: 1px solid #000; */
	margin-right: 60px;
	width: 152px;
	/* white-space: nowrap; */
`

export const InputContainer = styled.div`
	display: flex;
	align-items: baseline;
	margin-bottom: 24px;
`

export const InputValueContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

export const IconInputContainer = styled.div`
	margin: 0 8px;
	position: absolute;
`
export const IconCloseContainer = styled(IconInputContainer)`
	:hover {
		cursor: pointer;
	}
	/* svg path {
		stroke: ${colors['TextLightGray']};
	} */
`
