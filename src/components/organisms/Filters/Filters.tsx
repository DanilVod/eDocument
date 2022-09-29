import React, { FC, ReactNode } from 'react'

import { StatusFilter } from '@/components/molecules'

const FiltersListComponent = {
	status: StatusFilter
}
type FilterListNames = keyof typeof FiltersListComponent

type filterConfig = {
	[filterName in FilterListNames]: Parameters<typeof FiltersListComponent[filterName]>[0]
}

interface IFilters {
	filterConfig: filterConfig[]
	children?: ReactNode
}
export const Filters: FC<IFilters> = ({ filterConfig }) => {
	// const transformToComponent = (statusName: FilterListNames): any => {
	// 	const Comp = FiltersListComponent[statusName]
	// 	return <Comp />
	// }

	return (
		<div>
			{filterConfig.map((filter, index) => {
				const filterName = Object.keys(filter)[0]
				//@ts-ignore
				const FilterComponent = FiltersListComponent[filterName]
				return <FilterComponent {...filter.status} key={index} />
			})}
		</div>
	)
}
