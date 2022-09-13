import React, { FC } from 'react'

import { RenderRoutes, displayRouteMenu } from '@/helpers/routeHelpers'

import { NavigatorProps } from '@/types/Iroutes'

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

export const Navigator: FC<NavigatorProps> = ({ routes }) => {
	return (
		<div className="flex">
			<div className="routes">{displayRouteMenu(routes)}</div>
			<div>
				<Breadcrumbs />
				<RenderRoutes routes={routes} />
			</div>
		</div>
	)
}
