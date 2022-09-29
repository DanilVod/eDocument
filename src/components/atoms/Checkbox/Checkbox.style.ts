import styled from 'styled-components'

import { ICheckbox } from './Checkbox'
import { colors } from '@/constants/global.styles'

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`
export const Icon = styled.svg`
	fill: none;
`
export const ChecboxLabel = styled.span`
	margin-left: 8px;
`

export const StyledCheckbox = styled.div<Pick<ICheckbox, 'checked'>>`
	display: inline-block;
	width: 24px;
	height: 24px;
	border: ${(props) => (props.checked ? 'none' : `1px solid ${colors['SELightGray']}`)};
	background: ${(props) => (props.checked ? colors['SELifeGreen'] : 'white')};
	border-radius: 4px;
	transition: all 150ms;
	${Icon} {
		visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
	}
	:hover {
		cursor: pointer;
		border: ${(props) => (props.checked ? 'none' : `1px solid ${colors['SELifeGreen']}`)};
	}
`
export const CheckboxContainer = styled.div`
	display: flex;
	margin: 8px;
`
