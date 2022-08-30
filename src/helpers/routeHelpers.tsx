import React, { FC } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Iroutes, NavigatorProps } from '@/types/Iroutes'

import { colors } from '../constants/global.styles'

export const RenderRoutes: FC<NavigatorProps> = ({ routes }) => {
	return (
		<Routes>
			{routes.map((el) => (
				<Route key={el.name} path={el.path} element={<React.Suspense> {el.element}</React.Suspense>} />
			))}
			{/* <Route element={<h1>Not Found!</h1>} /> */}
		</Routes>
	)
}

export const displayRouteMenu = (routes: Iroutes[]) => {
	/**
	 * Render a single route as a list item link to the config's pathname
	 */

	const singleRoute = (route: Iroutes) => {
		return (
			<NavigatorRouter key={route.name}>
				<Link to={route.path} data-testid={route.name}>
					<div className="flex">
						<IconMenuContainer>{route.icon}</IconMenuContainer>
						<LabelMenuContainer>{route.name}</LabelMenuContainer>
					</div>
				</Link>
			</NavigatorRouter>
		)
	}

	// loop through the array of routes and generate an unordered list
	return (
		<NavigatorContainer>
			{routes.map((route, index) => {
				if (route.isHidden) return ''
				// if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
				if (route.routes) {
					return (
						<React.Fragment key={index + route.name}>
							{singleRoute(route)}
							{displayRouteMenu(route.routes)}
						</React.Fragment>
					)
				}

				// no nested routes, so just render a single route
				return singleRoute(route)
			})}
		</NavigatorContainer>
	)
}
const IconMenuContainer = styled.div(() => [
	css`
		margin-right: 1rem;
		svg path {
			stroke: ${colors['SElifeGreen']};
		}
	`
])

const LabelMenuContainer = styled.div(() => [
	css`
		font-weight: 500;
		color: ${colors['SElifeGreen']};
	`
])

const NavigatorContainer = styled.div(() => [
	css`
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	`
])
const NavigatorRouter = styled.div(() => [
	css`
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		margin-top: 1.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		:hover {
			${LabelMenuContainer} {
				color: ${colors['SElifeGreen']};
			}
			svg path {
				stroke: ${colors['SElifeGreen']};
			}
		}
	`
])
