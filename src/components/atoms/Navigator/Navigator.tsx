import React, { FC } from 'react'

import { RenderRoutes, displayRouteMenu } from '@/helpers/routeHelpers'

import { NavigatorProps } from '@/types/Iroutes'

export const Navigator: FC<NavigatorProps> = ({ routes }) => {
	return (
		<div>
			<div className="routes">{displayRouteMenu(routes)}</div>
			<div>
				<RenderRoutes routes={routes} />
			</div>
		</div>
	)
}
