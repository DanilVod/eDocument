import { useWhyDidYouUpdate } from 'ahooks'
import React, { FC, useEffect, useRef, useState } from 'react'

import useComponentVisible from '@/hooks/useComponentVisible'

import DropdownIcon from '@/assets/icons/Dropdown.svg?component'

import { ListItem } from '../List/ListItem'
import { Typography } from '../Typography/Typography'

import { IconContainer, ListItemWrap, ListStyled, StyledLabel, StyledSelect, StyledSelectList, WrapStyledSelect } from './Select.style'
import { SelectItem } from './SelectItem'
import validate from './utils/validate'
import { ColorsName } from '@/constants/global.styles'
import { errors, typeError } from '@/validations/errors'

export interface SelectProps {
	width?: string
	label: string
	name: string
	placeholder: string
	value?: string | string[]
	list: ListItem[]
	disabled?: boolean
	onChange?: (name: string, values: string | string[], error?: string) => void
	multy?: boolean
	onBlur?: (name: string, error: string) => void
	error?: string
	setFormError?: (err: string) => void
	validations?: { required: boolean; errorMessage: string }
}

export interface ISelectStyle {
	isActive?: boolean
	isField?: boolean
	width?: string
	error?: string
}

const Select: FC<SelectProps> = (props: SelectProps) => {
	const { ref, isActive, setIsActive } = useComponentVisible(false)
	// const [isField, setIsField] = useState<boolean>(true)
	const [values, setValues] = useState<string[]>([])
	const [value, setValue] = useState<string>('')
	const [error, setError] = useState<string>('')
	const isFirstRender = useRef(true)

	//setValues асинхронно и хранит предыдущее состояние
	let nextValues = values

	const update = () => {
		if (props.onChange && !isFirstRender.current && !isActive)
			if (props.multy) props.onChange(props.name, values)
			else props.onChange(props.name, value)
	}

	useEffect(() => {
		if (!isFirstRender.current) {
			const error = validate(values, value, isActive, props.multy, props.validations?.required, props.validations?.errorMessage)
			setError(error)
		}
		update()
		isFirstRender.current = false
	}, [isActive])

	const renderSelectValue = () => {
		let text,
			color = 'black' as ColorsName
		if (value) text = value
		else {
			text = props.placeholder
			color = values.length ? 'black' : 'TextLightGray'
		}

		return (
			<Typography type="p-medium" color={props.disabled ? 'DisabledGray' : color}>
				{text}
			</Typography>
		)
	}

	const renderList = () => {
		return (
			<StyledSelectList ref={ref} isActive={isActive}>
				<ListStyled
					onClick={() => {
						if (!props.disabled && !props.multy) setIsActive(!isActive)
					}}
				>
					{!props.multy && (
						<ListItemWrap
							onClick={() => {
								setValue('')
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
								} else {
									setValue(item.text)
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

	return (
		<WrapStyledSelect width={props.width}>
			<Typography type="p-medium" color="TextLightGray">
				<StyledLabel>{props.label}</StyledLabel>
			</Typography>
			<div style={{ width: '100%' }}>
				<StyledSelect
					onClick={() => {
						if (!props.disabled && !isActive) setIsActive(!isActive)
					}}
					width={props.width}
					isActive={isActive}
					error={props.error || error}
				>
					{renderSelectValue()}
					<IconContainer isActive={isActive}>
						<DropdownIcon />
					</IconContainer>
				</StyledSelect>
				<Typography type="p-medium" color="red">
					{error || props.error}
				</Typography>
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

export default React.memo(Select)
