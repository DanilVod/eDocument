import styled, { css } from 'styled-components'

import { allStatus } from '@/types/share'

import { colors } from '@/constants/global.styles'

const greenStatus = css`
	background-color: ${colors['green']};
`
const purpleStatus = css`
	background-color: ${colors['purple']};
`
const redStatus = css`
	background-color: ${colors['red']};
`
const yellowStatus = css`
	background-color: ${colors['yellow']};
`
const defineStatusColor = (type: allStatus) => {
	switch (type) {
		case 'Completed':
		case 'Sent':
		case 'New':
		case 'High':
			return greenStatus
		case 'Scheduled':
			return purpleStatus
		case 'Archived':
		case 'Ended':
		case 'Fired':
		case 'Urgent':
			return redStatus
		case 'Draft':
		case 'Active':
		case 'Top rated':
		case 'Low':
			return yellowStatus
		default:
			break
	}
}

export const StyledStatus = styled.div<{ type: allStatus }>`
	display: flex;
	justify-content: center;
	border-radius: 4px;
	height: fit-content;
	width: fit-content;
	min-width: 84px;
	${({ type }) => defineStatusColor(type)}
`
