import { Typography } from '@/components/atoms'

import CheckboxChecked from '@/assets/icons/CheckboxChecked.svg?component'
import CheckboxUnchecked from '@/assets/icons/CheckboxUnchecked.svg?component'

import { IconChecked, IconCheckedContainer, ListItemStyled } from './Select.style'

export interface ListItem {
	// prefixIcon?: ReactNode
	text: string
	multy?: boolean
	values?: string[]
}

export const SelectItem = (props: ListItem) => {
	return (
		<ListItemStyled text={props.text} multy={props.multy}>
			{props.multy &&
				(props.values && props.values.includes(props.text) ? (
					<IconChecked>
						<CheckboxChecked />
					</IconChecked>
				) : (
					<IconCheckedContainer>
						<CheckboxUnchecked />
					</IconCheckedContainer>
				))}
			<Typography type="p-medium">{props.text}</Typography>
		</ListItemStyled>
	)
}

// ListItem.defaultProps = {
// 	name: ''
// }

export default ListItem
