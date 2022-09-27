import React, { FC } from 'react'

import { DatePickerDate } from '@/components/molecules/DataPicker/DataPicker'

import { Typography } from '@/components/atoms'

import { MonthName, StyledActive, StyledActiveBetween, StyledDay, StyledDayOut, StyledMonth } from './CalendarMonth.style'

// export interface Date {
// 	day: number
// 	month: number
// 	year: number
// }

interface CalendarMonthProps {
	month: number
	year: number
	dates: DatePickerDate
	setDates: (dates: DatePickerDate) => void

	clickDay: (date: Date) => void
}

function getDay(date: any) {
	// получить номер дня недели, от 0 (пн) до 6 (вс)
	let day = date.getDay()
	if (day == 0) day = 7 // сделать воскресенье (0) последним днем
	return day - 1
}

export const CalendarMonth: FC<CalendarMonthProps> = ({ month, year, dates, clickDay }) => {
	const generateDays = (date: any) => {
		const date_tmp = new Date(date.getTime())
		const date_tmp2 = new Date(date.getTime())
		const arr = []
		let week = []

		for (let i = 0; i < getDay(date); i++) {
			date_tmp2.setDate(date_tmp2.getDate() - 1)
			week.unshift(
				<StyledDayOut key={i}>
					<Typography type="p-medium">{date_tmp2.getDate()}</Typography>
				</StyledDayOut>
			)
		}

		while (date.getMonth() == date_tmp.getMonth()) {
			const newDate = new Date(date)

			let styledDay = (
				<StyledDay
					key={date}
					onClick={
						() => clickDay(newDate)
						// if (activeInput == 'from') {
						// 	setDates({ ...dates, from: newDate })
						// } else if (activeInput == 'to') {
						// 	setDates({ ...dates, to: newDate })
						// }
						// if (nomulty) {
						// 	setDates({ from: newDate })
						// } else {
						// 	if (!dates.from) setDates({ from: newDate })
						// 	else if (newDate > dates.from) {
						// 		setDates({ ...dates, to: newDate })
						// 	} else if (newDate < dates.from) {
						// 		setDates({ ...dates, from: newDate })
						// 	} else setDates({ from: newDate })
						// }
					}
				>
					<Typography type="p-medium">{date.getDate()}</Typography>
				</StyledDay>
			)

			if (dates.to && dates.from && date < dates.to && date > dates.from) {
				styledDay = (
					<StyledActiveBetween
						key={date}
						onClick={
							() => clickDay(newDate)
							//   {
							// 	if (dates.from && dates.to) {
							// 		const midBorder = dates.from.getDate() + (dates.to.getDate() - dates.from.getDate()) / 2

							// 		if (newDate.getDate() > midBorder) {
							// 			setDates({ ...dates, to: newDate })
							// 		} else setDates({ ...dates, from: newDate })
							// 	}
							// }
						}
					>
						<Typography type="p-medium">{date.getDate()}</Typography>
					</StyledActiveBetween>
				)
			} else if (date.valueOf() == dates.to?.valueOf() || date.valueOf() == dates.from?.valueOf()) {
				styledDay = (
					<StyledActive key={date}>
						<Typography type="p-medium">{date.getDate()}</Typography>
					</StyledActive>
				)
			}

			week.push(styledDay)

			if (getDay(date) % 7 == 6) {
				// вс, последний день - перевод строки
				arr.push(week)
				week = []
			}
			date.setDate(date.getDate() + 1)
		}

		date_tmp2.setDate(date.getDate() - 1)

		for (let i = 0; i < 7 - getDay(date); i++) {
			date_tmp2.setDate(date_tmp2.getDate() + 1)
			week.push(
				<StyledDayOut key={i + 7}>
					<Typography type="p-medium">{date_tmp2.getDate()}</Typography>
				</StyledDayOut>
			)
		}
		arr.push(week)
		return arr
	}
	const date = new Date(year, month, 1)
	const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
	const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
	const numbers = generateDays(date)
	return (
		<StyledMonth>
			<MonthName>
				<Typography type="h4-bold">
					{monthNames[month]} {year}
				</Typography>
			</MonthName>

			<div className="flex">
				{days.map((day) => (
					<StyledDayOut key={day}>
						<Typography type="p-medium">{day}</Typography>
					</StyledDayOut>
				))}
			</div>
			{numbers.map((week, index) => (
				<div className="flex" key={index}>
					{week.map((day) => day)}
				</div>
			))}
		</StyledMonth>
	)
}

export default CalendarMonth
