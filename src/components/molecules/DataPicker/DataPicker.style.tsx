import styled, { css } from 'styled-components'

import { rootValues } from '@/constants/global.styles'

export const StyledLabel = styled.div`
	/* border: 1px solid #000; */
	margin-right: ${rootValues['labelMgRight']};
	width: ${rootValues['labelWidth']};
	display: flex;
	align-items: start;
	margin-top: 1%;
	/* white-space: nowrap; */
`

export const IconContainer = styled.div`
	margin: 0 32px;
	align-self: flex-start;
	margin-top: 10px;
`

export const IputsContainer = styled.div`
	display: flex;
	align-items: start;
`
export const StyledDatePicker = styled.div`
	margin-bottom: 24px;
	position: relative;
`
