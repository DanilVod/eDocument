import React, { FC, useContext, useEffect, useState } from 'react'

import { DataPickerContext, DatePickerDate } from '@/components/molecules/DataPicker/DataPicker'

import ArrowIcon from '@/assets/icons/Arrow.svg?component'

import CalendarMonth from '../CalendarMonth/CalendarMonth'

import { ArrowsContainer, BackIconContainer, ForwardIconContainer, StyledCalendar } from './Calendar.style'

export interface ICalendar {
	_ref?: React.RefObject<HTMLDivElement>
	onChange: (dates: DatePickerDate) => void
	clickDay: (date: Date) => void
	// dates: DatePickerDate
	isActive: boolean
}

const Calendar: FC<ICalendar> = (props) => {
	const [date, setDate] = useState(new Date(Date.now()))
	const { dates } = useContext(DataPickerContext)

	useEffect(() => {
		if (dates.from) setDateExtra(new Date(dates.from.getFullYear(), dates.from.getMonth(), 1), 0)
		else if (dates.to) setDateExtra(new Date(dates.to?.getFullYear(), dates.to?.getMonth(), 1), 0)
	}, [dates])

	const setDateExtra = (date: Date, val: number) => {
		setDate(new Date(date.setMonth(date.getMonth() + val)))
	}

	function getDate(date: Date, num = 'first', type = 'month') {
		if (num == 'first' && type == 'month') return date.getMonth() % 12
		else if (num == 'second' && type == 'month') return (date.getMonth() + 1) % 12
		else if (num == 'first' && type == 'year') return date.getFullYear()
		else if (num == 'second' && type == 'year') return (date.getMonth() + 1) % 12 == 0 ? date.getFullYear() + 1 : date.getFullYear()
		return 0
	}

	return (
		<StyledCalendar ref={props._ref} isActive={props.isActive}>
			<ArrowsContainer>
				<BackIconContainer
					onClick={() => {
						setDateExtra(date, -1)
					}}
				>
					<ArrowIcon />
				</BackIconContainer>

				<ForwardIconContainer
					onClick={() => {
						setDateExtra(date, 1)
					}}
				>
					<ArrowIcon />
				</ForwardIconContainer>
			</ArrowsContainer>
			<div className="flex">
				<CalendarMonth clickDay={props.clickDay} month={getDate(date, 'first', 'month')} year={getDate(date, 'first', 'year')} />
				<CalendarMonth clickDay={props.clickDay} month={getDate(date, 'second', 'month')} year={getDate(date, 'second', 'year')} />
			</div>
		</StyledCalendar>
	)
}

export default Calendar
