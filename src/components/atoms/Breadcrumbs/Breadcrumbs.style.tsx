import styled, { css } from 'styled-components'

import { colors } from '@/constants/global.styles'

export const StyledBreadcrumbs = styled.div`
	height: 20px;
	display: flex;
`
export const StyledBreadcrumb = styled.div`
	height: 20px;
	color: ${colors['TextLightGray']};
	display: flex;
	cursor: pointer;
`

export const LastBreadcrumb = styled(StyledBreadcrumb)`
	color: ${colors['black']};
`

export const IconContainer = styled.div(() => [
	css`
		margin: 0 8px;
		svg path {
			stroke: ${colors['TextLightGray']};
		}
		/* svg {
			height: 20px;
			width: 20px;
		} */
	`
])
