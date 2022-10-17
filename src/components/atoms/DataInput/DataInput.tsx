import React, { FC, useEffect, useMemo, useRef, useState } from 'react'

import { Typography } from '@/components/atoms'

import { IValidations } from '@/types/IValidations'

import CalendarIcon from '@/assets/icons/Calendar.svg?component'

import { IconContainer, InputContainer, InputValueContainer, StyledInput } from './DataInput.style'
import { errors } from '@/validations/errors'
import { patterns, typePattern } from '@/validations/patterns'

export interface DataInputProps {
	placeholder?: string
	// value: string
	name: string
	onClick: () => void
	readonly _ref: React.RefObject<HTMLInputElement>
	label?: string
	disabled?: boolean
	width?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	error?: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
	isActiveCalendar: boolean
}

export const DataInput: FC<DataInputProps> = (props: DataInputProps) => {
	const [isFirstRender, setIsFirstRender] = useState(true)

	const err = useMemo(() => {
		if (!isFirstRender && !props._ref.current?.disabled)
			if (props.required && !props._ref.current?.value && !props.isActiveCalendar) {
				return 'Заполните поле'
			}
		setIsFirstRender(false)
		return ''
	}, [props.isActiveCalendar])

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
						<StyledInput width={props.width} type="date" ref={props._ref} disabled={props.disabled} name={props.name} onChange={props.onChange} error={err} />
					</Typography>
					{addSuffixIcon()}
				</InputValueContainer>
				<div>
					<Typography type="p-medium" color="red">
						{err}
					</Typography>
				</div>
			</div>
		</InputContainer>
	)
}
export default DataInput
