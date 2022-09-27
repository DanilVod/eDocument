import { useLocation } from 'react-router'

import { Navigator } from '@/components/atoms'

import { ROUTES } from '@/routes'

export function LeftNavigatorMenu() {
	return (
		<>
			<div>
				<Navigator routes={ROUTES}></Navigator>
			</div>
		</>
	)
}
