import { useLocation } from 'react-router'

import { Navigator } from '@/components/atoms'

import { ROUTES } from '@/routes'

export function LeftNavigatorMenu() {
	return (
		<>
			<div className="w-1/6">
				<Navigator routes={ROUTES}></Navigator>
			</div>
		</>
	)
}
