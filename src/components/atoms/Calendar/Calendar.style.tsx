import styled, { css, keyframes } from 'styled-components'

import { ICalendar } from './Calendar'
import { rootValues } from '@/constants/global.styles'

interface IisActive {
	isActive: boolean
}

const IconContainer = styled.div`
	/* margin-right: 32px; */
`
export const ForwardIconContainer = styled(IconContainer)`
	/* margin-right: 32px; */
	/* justify-self: flex-end; */
`

export const BackIconContainer = styled(IconContainer)`
	transform: rotate(180deg);
	/* justify-self: flex-start; */
`

export const ArrowsContainer = styled.div`
	position: absolute;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 16px;
`

export const OneSliderContainer = styled.div`
	display: flex;
	align-items: center;
`

export const StyledCalendar = styled.div<IisActive>`
	opacity: 0;
	transition: opacity 0.3s, visibility 0.3s;
	visibility: hidden;
	height: 332px;
	position: absolute;
	background-color: #fff;
	box-shadow: ${rootValues['selectBoxShadow']};
	border-radius: 4px;
	top: 50px;
	z-index: 2;
	user-select: none;
	${(props) =>
		props.isActive &&
		css`
			opacity: 1;
			visibility: visible;
		`};
`
