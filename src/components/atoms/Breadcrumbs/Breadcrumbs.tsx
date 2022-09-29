import React from 'react'
import { useLocation, useNavigate } from 'react-router'

import { IBreadcrumb } from '@/types/IBreadcrumb'

import Arrow from '@/assets/icons/Arrow.svg?component'

import { Typography } from '../Typography/Typography'

import { IconContainer, LastBreadcrumb, StyledBreadcrumb, StyledBreadcrumbs } from './Breadcrumbs.style'

const Breadcrumbs = () => {
	const breadcrumbs = useLocation().state as IBreadcrumb[]
	const navigate = useNavigate()

	const navigation = (br: IBreadcrumb) => {
		if (breadcrumbs.length > 2 && br.path) {
			const newBreadcrums = breadcrumbs.slice(0, breadcrumbs.length - 1)
			navigate(br.path, { state: newBreadcrums })
		}
	}

	return (
		<StyledBreadcrumbs>
			{breadcrumbs &&
				breadcrumbs.map((el, index) => (
					<div key={el.path}>
						{breadcrumbs.length != index + 1 && el.title ? (
							<StyledBreadcrumb onClick={() => navigation(el)}>
								<Typography type="p-medium">{el.title}</Typography>
								<IconContainer>
									<Arrow />
								</IconContainer>
							</StyledBreadcrumb>
						) : (
							<LastBreadcrumb>
								<Typography type="p-medium">{el.title}</Typography>
							</LastBreadcrumb>
						)}
					</div>
				))}
		</StyledBreadcrumbs>
	)
}

export default Breadcrumbs
