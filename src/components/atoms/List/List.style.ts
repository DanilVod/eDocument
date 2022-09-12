import styled, { css } from 'styled-components'

import ListItem from './ListItem'
import { colors } from '@/constants/global.styles'

export const ListStyled = styled.div`
	padding: 16px;
`

export const IconContainer = styled.div`
	margin-right: 8px;
	svg path {
		fill: ${colors['SELightGray']};
	}
`

export const IconChecked = styled(IconContainer)`
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

export const ListItemStyled = styled.div<ListItem>`
	display: flex;
	align-items: center;
	height: 36px;
	border-radius: 4px;
	cursor: default;
	-webkit-user-select: none;

	${(props) => !props.multy && ForSingleItem}
`

// export const ListItemMultyStyled = styled.div`
// 	display: flex;
// 	align-items: center;
// 	height: 36px;
// 	border-radius: 4px;
// `
