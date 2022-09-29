import React, { ReactNode, useEffect, useState } from 'react'

import { Typography } from '@/components/atoms'

import CheckboxChecked from '@/assets/icons/CheckboxChecked.svg?component'
import CheckboxUnchecked from '@/assets/icons/CheckboxUnchecked.svg?component'

import { IconChecked, IconContainer, ListItemStyled } from './List.style'

export interface ListItem {
	// prefixIcon?: ReactNode
	text: string
	multy?: boolean
	values?: string[]
}

export const ListItem = (props: ListItem) => {
	return (
		<ListItemStyled text={props.text} multy={props.multy}>
			{props.multy &&
				(props.values && props.values.includes(props.text) ? (
					<IconChecked>
						<CheckboxChecked />
					</IconChecked>
				) : (
					<IconContainer>
						<CheckboxUnchecked />
					</IconContainer>
				))}
			<Typography type="p-medium">{props.text}</Typography>
		</ListItemStyled>
	)
}

// ListItem.defaultProps = {
// 	name: ''
// }

export default ListItem
