import styled from 'styled-components'

import { colors } from '@/constants/global.styles'

export const StyledMonth = styled.div`
	margin: 16px;
`

export const StyledDay = styled.div`
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${colors['TextDarkGray']};
	border-radius: 4px;
	:hover {
		background-color: ${colors['LightGreen']};
	}
`

export const StyledDayOut = styled(StyledDay)`
	color: ${colors['DisabledGray']};
`

export const StyledActiveFrom = styled(StyledDay)`
	color: ${colors['white']};
	background-color: ${colors['SElifeGreen']};
`

// export const StyledActiveTo = styled(StyledDay)`
// 	color: ${colors['white']};
// 	background-color: ${colors['SElifeGreen']};
// `
export const StyledActive = styled(StyledDay)`
	color: ${colors['white']};
	background-color: ${colors['SElifeGreen']};
	border-radius: 4px;
	:hover {
		background-color: ${colors['SElifeGreen']};
	}
`

export const StyledActiveBetween = styled(StyledDay)`
	background-color: ${colors['LightGreen']};
	:hover {
		border: 1px solid ${colors['SElifeGreen']};
	}
`

export const MonthName = styled.div`
	display: flex;
	justify-content: center;
	height: 48px;
	align-items: center;
`
