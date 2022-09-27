import React, { FC, useEffect, useState } from 'react'

import { Typography } from '@/components/atoms'

import CalendarIcon from '@/assets/icons/Calendar.svg?component'

import { IconContainer, InputContainer, InputValueContainer, StyledInput } from './DataInput.style'
import { errors } from '@/validations/errors'
import { patterns, typePattern } from '@/validations/patterns'

export interface DataInputProps {
	placeholder: string
	value: string
	name: string
	onClick: () => void
	readonly _ref: React.RefObject<HTMLInputElement>
	label: string
	disabled?: boolean
	width?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	error?: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const DataInput: FC<DataInputProps> = (props: DataInputProps) => {
	// const [error, setError] = useState<string>()
	// const [value, setValue] = useState<string>(props.value)
	// let fieldName = props.name as keyof typePattern
	// if (props.name.includes('To')) fieldName = props.name.split('To')[0] as keyof typePattern
	// else if (props.name.includes('From')) fieldName = props.name.split('From')[0] as keyof typePattern
	// useEffect(() => {
	// 	const re = new RegExp(patterns[fieldName])
	// 	if (props.value && !re.test(props.value)) setError(errors[fieldName]['isNotValid'])
	// 	else setError('')
	// }, [props.value])

	// useEffect(() => {
	// 	if (props.value) setError('')
	// }, [props.value])
	// console.log(props.name, props.value)
	// const handleBlur = () => {
	// 	if (props.required && !props.value) {
	// 		setError(errors[fieldName]['isNotField'])
	// 	} else setError('')
	// }

	const addSuffixIcon = () => {
		return (
			!props.disabled && (
				<IconContainer
					onClick={() => {
						if (props._ref.current) props._ref?.current.focus()
					}}
				>
					<CalendarIcon />
				</IconContainer>
			)
		)
	}

	return (
		<InputContainer onClick={props.onClick}>
			<div>
				<InputValueContainer>
					<Typography isInput type="p-medium" color="TextLightGray">
						<StyledInput
							// onClick="event.preventDefault()"
							width={props.width}
							type="date"
							ref={props._ref}
							disabled={props.disabled}
							name={props.name}
							onChange={props.onChange}
							value={props.value}
							// onBlur={handleBlur}
							error={props.value ? '' : props.error}
						/>
					</Typography>
					{addSuffixIcon()}
				</InputValueContainer>
				<div>
					<Typography type="p-medium" color="red">
						{props.value ? '' : props.error}
					</Typography>
				</div>
			</div>
		</InputContainer>
	)
}
export default DataInput
