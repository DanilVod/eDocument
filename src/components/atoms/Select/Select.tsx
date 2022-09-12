import React, { FC, useState } from 'react'

import useComponentVisible from '@/hooks/useComponentVisible'

import DropdownIcon from '@/assets/icons/Dropdown.svg?component'

import { ListItem } from '../List/ListItem'
import { Typography } from '../Typography/Typography'

import { IconContainer, ListItemWrap, ListStyled, StyledLabel, StyledSelect, StyledSelectList, WrapStyledSelect } from './Select.style'
import { SelectItem } from './SelectItem'
import { errors, typeError } from '@/validations/errors'

export interface SelectProps {
	width?: string
	label: string
	name: string
	placeholder: string
	value: string | string[]
	list: ListItem[]
	disabled?: boolean
	required?: boolean
	onChange: (values: string | string[], name: string) => void
	multy?: boolean
}

export interface ISelectStyle {
	isActive?: boolean
	isField?: boolean
	width?: string
}

export interface IWrapStyledSelect {
	ref: React.RefObject<HTMLDivElement>
	// onClick: () => void
	width?: string
}

const Select: FC<SelectProps> = (props: SelectProps) => {
	const { ref, isActive, setIsActive } = useComponentVisible(false)
	const [isField, setIsField] = useState<boolean>(true)
	const [values, setValues] = useState<string[]>([])

	//setValues асинхронно и хранит предыдущее состояние
	let nextValues = values

	// useEffect(() => {
	// 	if ((!props.value || (props.multy && !values.length)) && props.required) {
	// 		setIsField(false)
	// 	} else setIsField(true)
	// }, [props.value, isActive])

	// useEffect(() => {
	// 	if (!isActive) setIsField(true)
	// }, [])

	const renderSelectValue = () => {
		if (props.value && !Array.isArray(props.value)) {
			return <Typography type="p-medium">{props.value}</Typography>
		} else if (values.length) {
			return (
				<Typography type="p-medium" color={props.disabled ? 'DisabledGray' : 'black'}>
					{props.placeholder}
				</Typography>
			)
		} else {
			return (
				<Typography type="p-medium" color={props.disabled ? 'DisabledGray' : 'TextLightGray'}>
					{props.placeholder}
				</Typography>
			)
		}
	}

	const renderError = () => {
		if (!isField && (!props.value || (props.multy && !values.length)) && !isActive) {
			return (
				<Typography type="p-medium" color="red">
					{errors[props.name as keyof typeError].isNotField}
				</Typography>
			)
		}
	}

	const renderList = () => {
		if (isActive) {
			return (
				<StyledSelectList isActive={isActive}>
					<ListStyled
						onClick={() => {
							if (!props.disabled && !props.multy) setIsActive(!isActive)
						}}
					>
						{!props.multy && (
							<ListItemWrap
								onClick={() => {
									props.onChange('', props.name)
									if (props.required) setIsField(false)
								}}
							>
								<SelectItem text={props.placeholder} />
							</ListItemWrap>
						)}
						{props.list.map((item: ListItem, index: number) => (
							<ListItemWrap
								key={index}
								onClick={() => {
									if (props.multy) {
										if (values.includes(item.text)) nextValues = values.filter((value) => value !== item.text)
										else nextValues = [...values, item.text]
										setValues(nextValues)
										props.onChange(nextValues, props.name)
										if (!nextValues.length) setIsField(false)
										else setIsField(true)
									} else {
										props.onChange(item.text, props.name)
										setIsField(true)
									}
								}}
							>
								<SelectItem multy={props.multy} text={item.text} key={index} values={values} />
							</ListItemWrap>
						))}
					</ListStyled>
				</StyledSelectList>
			)
		}
	}

	return (
		<WrapStyledSelect ref={ref} width={props.width}>
			<Typography type="p-medium" color="TextLightGray">
				<StyledLabel>{props.label}</StyledLabel>
			</Typography>
			<div>
				<StyledSelect
					onClick={() => {
						if (!props.disabled) setIsActive(!isActive)

						if ((!props.value || (props.multy && !values.length)) && props.required) {
							setIsField(false)
						}
					}}
					width={props.width}
					isActive={isActive}
					isField={isField}
				>
					{renderSelectValue()}
					<IconContainer isActive={isActive}>
						<DropdownIcon />
					</IconContainer>
				</StyledSelect>
				{renderError()}
				{renderList()}
			</div>
		</WrapStyledSelect>
	)
}

// Select.defaultProps = {
// 	width: '200px',
// 	disabled: false,
// 	list: []
// }

export default Select
