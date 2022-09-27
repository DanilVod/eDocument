import styled, { css } from 'styled-components'

import { rootValues } from '../../../constants/global.styles'

import { colors } from '@/constants/global.styles'

export const StyledBreadcrumbs = styled.div`
	margin-top: 16px;
	margin-bottom: 32px;
	display: flex;
	height: 36px;
	align-items: center;
`
export const StyledBreadcrumb = styled.div`
	color: ${colors['TextLightGray']};
	display: flex;
	cursor: pointer;
`

export const LastBreadcrumb = styled(StyledBreadcrumb)`
	color: ${colors['black']};
`

export const IconContainer = styled.div(() => [
	css`
		margin: 0 ${rootValues['smallPd']};
		svg path {
			stroke: ${colors['TextLightGray']};
		}
	`
])
