import styled, { css } from 'styled-components'

import { rootValues } from '../../../constants/global.styles'

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
	border-radius: ${rootValues['radius']};
	background-color: ${colors['TableTitleGrayBG']};
	height: ${rootValues['minHeight']};
	padding-left: ${rootValues['mediumPd']};
	padding-right: ${rootValues['largePd']};
	color: ${colors['black']};
	/* width: 100%; */
	width: ${({ width = '100%' }) => width};
	::-webkit-calendar-picker-indicator {
		display: none;
	}

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
	margin-right: ${rootValues['labelMgRight']};
	width: ${rootValues['labelWidth']};
	/* white-space: nowrap; */
`

export const InputContainer = styled.div`
	display: flex;
	align-items: baseline;
	margin-bottom: ${rootValues['itemFormMgBottom']};
`

export const InputValueContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

export const IconInputContainer = styled.div`
	margin: 0 ${rootValues['smallPd']};
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

export const IconCalendarContainer = styled.div`
	margin: 0 ${rootValues['smallPd']};
	position: absolute;
	:hover {
		cursor: pointer;
	}
`
