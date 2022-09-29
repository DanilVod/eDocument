import React from 'react'

import { ListStyled } from './List.style'
import { ListItem } from './ListItem'

interface ListProps<T> {
	items: T[]
	renderItem: (item: T, index: number) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
	return <ListStyled>{props.items.map(props.renderItem)}</ListStyled>
}
{
	/* <List
						items={props.list || []}
						renderItem={(item: ListItem, index: number) => {
							return <ListItem text={item.text} prefixIcon={item.prefixIcon} key={index} onClick={props.onChange} />
						}}
					/> */
}
