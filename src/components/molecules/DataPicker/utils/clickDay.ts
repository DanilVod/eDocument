import React, { useCallback } from 'react'

import { DatePickerDate } from '../DataPicker'

import { dateToString } from './dateStringConvert'

export const clickDay = (
	newDate: Date,
	dates: DatePickerDate,
	setDates: (date: DatePickerDate) => void,
	activeInput: string,
	setActiveInput: (str: string) => void,

	input1: React.MutableRefObject<HTMLInputElement>,
	input2: React.MutableRefObject<HTMLInputElement>,
	multy?: boolean
) => {
	// document.activeElement === input1.current
	if (activeInput == 'from') {
		if (dates.to == null && !dates.to) {
			setDates({ ...dates, from: newDate })
			input1.current.value = dateToString(newDate)
			if (!multy) {
				return
			}
			input2.current.disabled = false
			input2.current.focus()
			setActiveInput('to')
		} else {
			if (newDate < dates.to) {
				setDates({ ...dates, from: newDate })
				input1.current.value = dateToString(newDate)
			} else {
				setDates({ ...dates, to: newDate })
				input2.current.value = dateToString(newDate || null)
				// setValueTo(dateToString(newDate || null))
			}
		}
	} else if (activeInput == 'to' && dates.from) {
		if (newDate > dates.from) {
			setDates({ ...dates, to: newDate })
			input2.current.value = dateToString(newDate || null)
		} else {
			setDates({ ...dates, from: newDate })
			input1.current.value = dateToString(newDate)
		}
	}
}
