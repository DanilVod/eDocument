import React from 'react'

import { LeftNavigatorMenu } from '@/components/molecules/LeftNavigatorMenu'

export const App = React.memo(() => {
	return (
		<div className="App">
			<LeftNavigatorMenu></LeftNavigatorMenu>
		</div>
	)
})
App.displayName = 'App'
