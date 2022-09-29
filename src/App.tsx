import React from 'react'
import styled from 'styled-components'

import { LeftNavigatorMenu } from '@/components/molecules/LeftNavigatorMenu'

import { colors } from './constants/global.styles'

export const App = React.memo(() => {
	return (
		<div className="App">
			<StyledLogoHeader></StyledLogoHeader>
			<LeftNavigatorMenu></LeftNavigatorMenu>
		</div>
	)
})

export const StyledLogoHeader = styled.div`
	height: 72px;
	border-bottom: 1px solid ${colors['LightGray']};
`
App.displayName = 'App'
