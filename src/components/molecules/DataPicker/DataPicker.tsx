import React, { FC, useEffect, useRef, useState } from 'react'

import { Typography } from '@/components/atoms'
import Calendar from '@/components/atoms/Calendar/Calendar'
import DataInput from '@/components/atoms/DataInput/DataInput'

import useComponentVisible from '@/hooks/useComponentVisible'

import ArrowRight from '@/assets/icons/ArrowRight.svg?component'

import { IconContainer, IputsContainer, StyledDatePicker, StyledLabel } from './DataPicker.style'

// export interface DatePickerStr {
// 	from: Date | null
// 	to?: Date | null
// }

export interface DatePickerDate {
	from: Date | null
	to?: Date | null
}

interface DataPickerProps {
	name: string
	value: DatePickerDate
	onChange: (name: string, value: DatePickerDate) => void
	multy?: boolean
	label: string
	required?: boolean
	error?: string
	setFormError?: (err: string) => void
}

const DataPicker: FC<DataPickerProps> = (props) => {
	const { ref, isActive, setIsActive } = useComponentVisible(false)
	const [date, setDate] = useState<DatePickerDate>({ from: null, to: null })
	const [activeInput, setActiveInput] = useState<string>('')

	const [valueFrom, setValueFrom] = useState<string>('')
	const [valueTo, setValueTo] = useState<string>('')

	const input1 = useRef() as React.MutableRefObject<HTMLInputElement>
	const input2 = useRef() as React.MutableRefObject<HTMLInputElement>

	function dateToString(date: Date | null) {
		if (!date) return ''

		let month = `${date.getMonth() + 1}`
		if (date.getMonth() + 1 < 10) month = '0' + month
		let day = `${date.getDate()}`
		if (date.getDate() < 10) day = '0' + day

		const strDate = `${date.getFullYear()}-${month}-${day}`
		return strDate
	}

	function stringToDate(string: string) {
		const dates = string.split('-').map(Number)
		const date = new Date(dates[0], dates[1] - 1, dates[2])
		if (isNaN(date.getTime())) return null
		return date
	}

	const clickDay = (newDate: Date) => {
		if (activeInput == 'from') {
			if (date.to == null && !date.to) {
				setDate({ ...date, from: newDate })
				setValueFrom(dateToString(newDate))
				if (!props.multy) {
					return
				}
				setActiveInput('to')

				input2.current.focus()
			} else {
				if (newDate < date.to) {
					setDate({ ...date, from: newDate })
					setValueFrom(dateToString(newDate))
				} else {
					setDate({ ...date, to: newDate })
					setValueTo(dateToString(newDate || null))
				}
			}
		} else if (activeInput == 'to') {
			if (date.from == null) {
				setDate({ ...date, to: newDate })
				setValueTo(dateToString(newDate || null))
				setActiveInput('from')
				input1.current.focus()
			} else {
				if (newDate > date.from) {
					setDate({ ...date, to: newDate })
					setValueTo(dateToString(newDate || null))
				} else {
					setDate({ ...date, from: newDate })
					setValueFrom(dateToString(newDate))
				}
			}
		}
	}

	const handleChangeDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValueFrom(e.target.value)
		setDate({ ...date, from: stringToDate(e.target.value) })
	}

	const handleChangeDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValueTo(e.target.value)

		const to = stringToDate(e.target.value)
		if (date.from && to && date.from > to) {
			setDate({ ...date, to: null })
		} else setDate({ ...date, to: to })
	}
	const handleChangeDate = (dates: DatePickerDate) => {
		setDate({ ...dates })
		setValueFrom(dateToString(dates.from))
		setValueTo(dateToString(dates.to || null))
	}
	useEffect(() => {
		if (date.from && date.to) {
			props.onChange(props.name, date)
			if (props.setFormError) props.setFormError('')
		} else props.onChange(props.name, date)
	}, [date])

	return (
		<StyledDatePicker>
			{props.multy ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ display: 'flex', width: '100%' }}>
						<StyledLabel>
							<Typography type="p-medium" color="TextLightGray">
								{props.label}
							</Typography>
						</StyledLabel>

						<IputsContainer>
							<DataInput
								required={props.required}
								_ref={input1}
								onClick={() => {
									// if (date.from && date.to) setIsActive(false)
									if (!isActive) setIsActive(!isActive)
									setActiveInput('from')
									// input1.current.focus()
								}}
								width="130px"
								name={props.name + 'From'}
								placeholder="Период"
								label="Дата начала"
								value={valueFrom}
								onChange={handleChangeDateFrom}
								error={props.error}
							/>
							<IconContainer>
								<ArrowRight />
							</IconContainer>
							<DataInput
								required={props.required}
								_ref={input2}
								// disabled={date.from ? false : true}
								onClick={() => {
									// if (date.from && date.to) setIsActive(false)
									if (!isActive) setIsActive(!isActive)
									setActiveInput('to')
									// input2.current.focus()
								}}
								width="130px"
								name={props.name + 'To'}
								placeholder="Период"
								label="Дата начала"
								value={valueTo}
								onChange={handleChangeDateTo}
								error={props.error}
							/>
						</IputsContainer>
					</div>

					<Calendar _ref={ref} isActive={isActive} clickDay={clickDay} onChange={handleChangeDate} dates={date} />
				</div>
			) : (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ display: 'flex', width: '100%' }}>
						<StyledLabel>
							<Typography type="p-medium" color="TextLightGray">
								{props.label}
							</Typography>
						</StyledLabel>
						<DataInput
							required
							error={props.error}
							_ref={input1}
							onClick={() => {
								if (!isActive) setIsActive(!isActive)
								setActiveInput('from')
								// calendarRef
								// console.log(calendarRef)
								// input1.current.focus()
							}}
							width="120px"
							name={props.name + 'From'}
							placeholder="Период"
							label="Дата начала"
							value={valueFrom}
							onChange={handleChangeDateFrom}
						/>
					</div>
					<Calendar _ref={ref} isActive={isActive} clickDay={clickDay} onChange={handleChangeDate} dates={date} />
				</div>
			)}
		</StyledDatePicker>
	)
}

export default DataPicker
