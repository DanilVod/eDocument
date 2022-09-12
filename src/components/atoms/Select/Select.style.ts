import styled, { css } from 'styled-components'

import { ISelectStyle, IWrapStyledSelect } from './Select'
import SelectItem from './SelectItem'
import { colors } from '@/constants/global.styles'

const handleActiveField = ({ isActive, isField }: ISelectStyle) => {
	if (isActive)
		return css`
			border: 1px solid ${colors['BorderGray']};
			background-color: ${colors['white']};
		`
	else if (!isField) {
		return css`
			border: 1px solid ${colors['red']};
		`
	}
	return css`
		background-color: ${colors['TableTitleGrayBG']};
		:hover {
			border: 1px solid ${colors['BorderGray']};
		}
	`
}

export const WrapStyledSelect = styled.div<IWrapStyledSelect>`
	display: flex;
	align-items: baseline;

	/* width: 100%; */
	position: relative;
	border-radius: 4px;
	margin-bottom: 24px;
`

export const StyledSelect = styled.div<ISelectStyle>`
	width: 100%;
	height: 36px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	padding-left: 16px;
	position: relative;
	width: ${({ width = '400px' }) => width};
	cursor: default;
	-webkit-user-select: none;
	${(props) => handleActiveField(props)};
`

export const StyledSelectList = styled.div<ISelectStyle>`
	z-index: 2;
	width: ${({ width = '400px' }) => width};
	height: fit-content;
	border-radius: 4px;
	background-color: ${colors['white']};
	margin-top: 12px;
	box-shadow: 0px 0px 10px 5px rgba(79, 79, 79, 0.05);
	display: ${(props) => (props.isActive ? 'block' : 'none')};
	/* transform: scale(0.9); */
	transition: all 0.3s ease-in;
	position: absolute;
`

export const IconContainer = styled.div<ISelectStyle>`
	margin: 0 8px;
	right: 0;
	position: absolute;
	transform: ${(props) => (props.isActive ? 'rotate(180deg)' : 'none')};
	transition: transform 0.26s cubic-bezier(0.32, 0.08, 0.24, 1);
	:hover {
		cursor: pointer;
	}
`

export const PrefixIconContainer = styled(IconContainer)`
	position: inherit;
	/* left: 0; */
`

export const StyledLabel = styled.div`
	/* border: 1px solid #000; */
	margin-right: 60px;
	width: 152px;
	/* white-space: nowrap; */
`
export const ListStyled = styled.div`
	padding: 16px;
`

export const ListItemWrap = styled.div`
	/* display: flex;
	align-items: center;
	height: 36px;
	border-radius: 4px; */
`

export const IconCheckedContainer = styled.div`
	margin-right: 8px;
	svg path {
		fill: ${colors['SELightGray']};
	}
`

export const IconChecked = styled(IconCheckedContainer)`
	svg path {
		fill: ${colors['SElifeGreen']};
	}
`

const ForSingleItem = css`
	padding-left: 16px;
	:hover {
		cursor: pointer;
		color: ${colors['SElifeGreen']};
		background-color: ${colors['LightGreen']};
		/* svg path {
    stroke: ${colors['SElifeGreen']};
  } */
	}
`

export const ListItemStyled = styled.div<SelectItem>`
	display: flex;
	align-items: center;
	height: 36px;
	border-radius: 4px;
	cursor: default;
	-webkit-user-select: none;

	${(props) => !props.multy && ForSingleItem}
`
