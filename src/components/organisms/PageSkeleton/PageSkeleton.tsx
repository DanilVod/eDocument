import React, { FC, ReactNode } from 'react'

export interface IPageSkeleton {
	filters: ReactNode
}
export const PageSkeleton: FC<IPageSkeleton> = ({ filters }) => {
	const dataForTable = []
	return (
		<>
			<div>Breadcrumbs</div>
			<div className="filters">{filters}</div>
			<div className="Content"></div>
		</>
	)
}
