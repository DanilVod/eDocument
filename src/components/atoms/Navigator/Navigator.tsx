import React, { FC } from 'react'

import { RenderRoutes, displayRouteMenu } from '@/helpers/routeHelpers'

import { NavigatorProps } from '@/types/Iroutes'

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

import { StyledNavigator, StyledPage } from './Navigator.style'

export const Navigator: FC<NavigatorProps> = ({ routes }) => {
	return (
		<div className="flex">
			<StyledNavigator>{displayRouteMenu(routes)}</StyledNavigator>
			<StyledPage>
				<Breadcrumbs />
				<RenderRoutes routes={routes} />
			</StyledPage>
		</div>
	)
}
