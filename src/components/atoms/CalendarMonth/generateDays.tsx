import { DatePickerDate } from '@/components/molecules/DataPicker/DataPicker'

import { Typography } from '../Typography/Typography'

import { StyledActive, StyledActiveBetween, StyledDay, StyledDayOut } from './CalendarMonth.style'

function getDay(date: any) {
	// получить номер дня недели, от 0 (пн) до 6 (вс)
	let day = date.getDay()
	if (day == 0) day = 7 // сделать воскресенье (0) последним днем
	return day - 1
}

export const generateDays = (date: any, dates: DatePickerDate, clickDay: (date: Date) => void) => {
	const dateFix = new Date(date.getTime())
	const dateForDayOut = new Date(date.getTime())
	const arr = []
	let week = []

	for (let i = 0; i < getDay(date); i++) {
		dateForDayOut.setDate(dateForDayOut.getDate() - 1)
		week.unshift(
			<StyledDayOut key={i}>
				<Typography type="p-medium">{dateForDayOut.getDate()}</Typography>
			</StyledDayOut>
		)
	}

	while (date.getMonth() == dateFix.getMonth()) {
		const newDate = new Date(date)

		let styledDay = (
			<StyledDay key={date} onClick={() => clickDay(newDate)}>
				<Typography type="p-medium">{date.getDate()}</Typography>
			</StyledDay>
		)

		if (dates.to && dates.from && date < dates.to && date > dates.from) {
			styledDay = (
				<StyledActiveBetween key={date} onClick={() => clickDay(newDate)}>
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

	dateForDayOut.setDate(date.getDate() - 1)

	for (let i = 0; i < 7 - getDay(date); i++) {
		dateForDayOut.setDate(dateForDayOut.getDate() + 1)
		week.push(
			<StyledDayOut key={i + 7}>
				<Typography type="p-medium">{dateForDayOut.getDate()}</Typography>
			</StyledDayOut>
		)
	}
	arr.push(week)
	return arr
}
