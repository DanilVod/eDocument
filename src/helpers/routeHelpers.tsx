import React, { FC } from 'react'
import { Link, Route, Routes, useMatch } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Typography } from '@/components/atoms'

import { IBreadcrumb } from '@/types/IBreadcrumb'
import { IrouteCategory, Iroutes, NavigatorProps } from '@/types/Iroutes'

import { colors } from '../constants/global.styles'

export const RenderRoutes: FC<NavigatorProps> = ({ routes }) => {
	const role = 'user'
	return (
		<Routes>
			{routes.map((routeCategory) => {
				return (
					<Route key={routeCategory.name}>
						{routeCategory.routes.map((route) => {
							// history.replaceState([routeCategory.title, route.name], '', route.path)
							if (route.roles.includes(role))
								return (
									<Route key={route.name} path={route.path} element={<React.Suspense> {route.element}</React.Suspense>}>
										{route.routes && route.routes.map((r) => <Route key={r.name} path={r.path} element={<React.Suspense> {r.element}</React.Suspense>} />)}
									</Route>
								)
						})}
					</Route>
				)
			})}
			{/* <Route element={<h1>Not Found!</h1>} /> */}
		</Routes>
	)
}

// export const displayRouteCategoryMenu = (routes: IrouteCategory[]) => {
// 	const role = 'user'
// 	return routes.map((routesCategory) => {
// 		if (routesCategory.roles.includes(role)) return displayRouteMenu(routesCategory.routes)
// 		return ''
// 	})
// }

const singleRoute = (route: Iroutes, locationState: IBreadcrumb[]) => {
	const match = useMatch(route.path)
	return (
		<NavigatorRouter key={route.name}>
			<StyledNavLink className={match ? 'active' : ''} to={route.path} state={locationState} data-testid={route.name}>
				<div className="flex">
					<IconMenuContainer>{route.icon}</IconMenuContainer>

					{/* <LabelMenuContainer> */}
					<Typography type="p-large">{route.name}</Typography>
					{/* </LabelMenuContainer> */}
				</div>
			</StyledNavLink>
		</NavigatorRouter>
	)
}

export const displayNestedRouteMenu = (routes: Iroutes[], oldBreadcrumbs: IBreadcrumb[]) => {
	return (
		<NavigatorContainer>
			{routes.map((route) => {
				const breadcrumbs: IBreadcrumb[] = [...oldBreadcrumbs, { title: route.name, path: route.path }]
				if (route.isHidden) return ''
				return singleRoute(route, breadcrumbs)
			})}
		</NavigatorContainer>
	)
}

export const displayRouteMenu = (routes: IrouteCategory[]) => {
	/**
	 * Render a single route as a list item link to the config's pathname
	 */

	const role = 'user'
	// loop through the array of routes and generate an unordered list
	return (
		<NavigatorContainer>
			{routes.map((routeCategory, index) => {
				if (routeCategory.roles.includes(role))
					return (
						<React.Fragment key={index}>
							{routeCategory.title && (
								<LabelMenuCategoryContainer>
									<Typography type="p-large">{routeCategory.title}</Typography>
								</LabelMenuCategoryContainer>
							)}
							{routeCategory.routes?.map((route) => {
								//added in location.state when calling the function singleRoute
								const breadcrumbs: IBreadcrumb[] = [
									{ title: routeCategory.title, path: '' },
									{ title: route.name, path: route.path }
								]
								if (route.isHidden || !route.roles.includes(role)) return ''
								// if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
								if (route.routes) {
									return (
										<React.Fragment key={index + route.name}>
											{singleRoute(route, breadcrumbs)}
											{displayNestedRouteMenu(route.routes, breadcrumbs)}
										</React.Fragment>
									)
								}

								// console.log(navigate)
								// no nested routes, so just render a single route
								return singleRoute(route, breadcrumbs)
							})}
						</React.Fragment>
					)
				return ''
			})}
		</NavigatorContainer>
	)
}
const IconMenuContainer = styled.div(() => [
	css`
		margin-right: 1rem;
		svg path {
			stroke: ${colors['black']};
		}
		/* svg {
			height: 20px;
			width: 20px;
		} */
	`
])

const StyledNavLink = styled(Link)`
	color: ${colors['black']};
	height: inherit;
	display: flex;
	align-items: center;
	padding: 0 16px;
	border-radius: 4px;

	&.active {
		background: ${colors['LightGreen']};
		color: ${colors['SElifeGreen']};
		svg path {
			stroke: ${colors['SElifeGreen']};
		}
		:hover {
			color: ${colors['GreenBright']};

			svg path {
				stroke: ${colors['GreenBright']};
			}
		}
	}
`

const LabelMenuCategoryContainer = styled.div(() => [
	css`
		color: ${colors['TextLightGray']};
		height: 36px;
		display: flex;
		align-items: center;
	`
])

const NavigatorContainer = styled.div(() => [
	css`
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding: 16px;
		width: max-content;
	`
])
const NavigatorRouter = styled.div(() => [
	css`
		height: 36px;
		/* width: auto; */
		:hover {
			${StyledNavLink} {
				color: ${colors['SElifeGreen']};
			}
			svg path {
				stroke: ${colors['SElifeGreen']};
			}
		}
	`
])
