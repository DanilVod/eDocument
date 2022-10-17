import { useWhyDidYouUpdate } from 'ahooks'
import React, { FC, useCallback, useContext, useMemo } from 'react'

import { DataPickerContext, IDataPickerContext } from '@/components/molecules/DataPicker/DataPicker'

import { Typography } from '@/components/atoms'

import { MonthName, StyledDayOut, StyledMonth } from './CalendarMonth.style'
import { generateDays } from './generateDays'

interface CalendarMonthProps {
	month: number
	year: number

	clickDay: (date: Date) => void
}

export const CalendarMonth: FC<CalendarMonthProps> = ({ month, year, clickDay }) => {
	const { dates } = useContext(DataPickerContext)
	// useWhyDidYouUpdate('CalendarMonth', { month, year, clickDay })
	const date = new Date(year, month, 1)
	const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
	const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
	const ComponentsNumbers = useMemo(() => generateDays(date, dates, clickDay), [date])

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
			{ComponentsNumbers.map((week, index) => (
				<div className="flex" key={index}>
					{week.map((day) => day)}
				</div>
			))}
		</StyledMonth>
	)
}

export default React.memo(CalendarMonth)
