import styled from 'styled-components'

import { colors } from '@/constants/global.styles'

export const StyledPlaceholder = styled.div`
	font-family: 'Poppins';
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-around;
	position: relative;
	min-width: 302px;
	height: 48px;
`

export const PlaceholderValue = styled.input`
	background: none;
	border: none;
	outline: none;
`
export const PlaceholderLine = styled.div`
	position: absolute;
	bottom: 0;
	height: 1px;
	width: -webkit-fill-available;
	border-bottom: 1px solid ${colors['SElifeGreen']};
`
export const PlaceholderLineActive = styled(PlaceholderLine)`
	border-bottom: 1px solid ${colors['SElifeGreen']};
`
export const PlaceholderLabel = styled.label`
	font-size: 11px;
	color: ${colors['SElifeGreen']};
	font-weight: 500;
	transition: ease-in-out 0.3s;
	${PlaceholderValue}:focus-within ~ & {
		color: ${colors['SElifeGreen']};
	}
`
