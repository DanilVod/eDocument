import { Action } from '@reduxjs/toolkit'
import { useWhyDidYouUpdate } from 'ahooks'
import React, { FC, createContext, useCallback, useEffect, useRef, useState } from 'react'

import { Typography } from '@/components/atoms'
import Calendar from '@/components/atoms/Calendar/Calendar'
import DataInput from '@/components/atoms/DataInput/DataInput'

import useComponentVisible from '@/hooks/useComponentVisible'
import useDebounce from '@/hooks/useDebounce'

import ArrowRight from '@/assets/icons/ArrowRight.svg?component'

import { IconContainer, IputsContainer, StyledDatePicker, StyledLabel } from './DataPicker.style'
import { clickDay } from './utils/clickDay'
import { dateToString, stringToDate } from './utils/dateStringConvert'

export interface DatePickerDate {
	from: Date | null
	to?: Date | null
}

interface DataPickerProps {
	name: string
	value?: DatePickerDate
	onChange: (name: string, value: DatePickerDate) => void
	multy?: boolean
	label: string
	// required?: boolean
	error?: string
	validations?: { required: boolean }
}

export interface IDataPickerContext {
	dates: DatePickerDate
	setDates: (date: DatePickerDate) => void
	// activeInput: string
	// setActiveInput: (str: string) => void
}

export const DataPickerContext = createContext<IDataPickerContext>({ dates: { from: null, to: null }, setDates: () => {} })

const DataPicker: FC<DataPickerProps> = (props) => {
	// useWhyDidYouUpdate('DataPicker', props)
	const required = props.validations?.required

	const { ref, isActive, setIsActive } = useComponentVisible(false)
	const [dates, setDates] = useState<DatePickerDate>({ from: null, to: null })
	const [activeInput, setActiveInput] = useState<string>('')

	const input1 = useRef() as React.MutableRefObject<HTMLInputElement>
	const input2 = useRef() as React.MutableRefObject<HTMLInputElement>

	const update = useDebounce((to) => {
		if (dates.from && to && dates.from >= to) {
			setDates({ ...dates, to: null })
			input2.current.value = ''
		} else setDates({ ...dates, to: to })
	}, 1000)

	const onClickDay = useCallback(
		(newDate: Date) => {
			clickDay(newDate, dates, setDates, activeInput, setActiveInput, input1, input2, props.multy)
		},
		[dates, activeInput]
	)

	const handleChangeDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		// setValueFrom(e.target.value)
		input1.current.value = e.target.value
		setDates({ ...dates, from: stringToDate(e.target.value) })
	}

	const handleChangeDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
		// setValueTo(e.target.value)
		input2.current.value = e.target.value
		const to = stringToDate(e.target.value)
		update(to)
	}
	const handleChangeDate = (dates: DatePickerDate) => {
		setDates({ ...dates })
		input1.current.value = dateToString(dates.from)
		// setValueFrom(dateToString(dates.from))
		input2.current.value = dateToString(dates.to || null)
		// setValueTo(dateToString(dates.to || null))
	}

	useEffect(() => {
		if (dates.from && dates.to && !isActive) {
			props.onChange(props.name, dates)
		}
	}, [isActive])

	return (
		<DataPickerContext.Provider value={{ dates, setDates }}>
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
									required={required}
									_ref={input1}
									onClick={() => {
										if (!isActive) setIsActive(!isActive)
										setActiveInput('from')
									}}
									width="130px"
									name={props.name + 'From'}
									onChange={handleChangeDateFrom}
									error={props.error}
									isActiveCalendar={isActive}
								/>
								<IconContainer>
									<ArrowRight />
								</IconContainer>
								<DataInput
									disabled={!dates.from}
									required={required}
									_ref={input2}
									onClick={() => {
										if (!isActive && !input2.current.disabled) {
											setIsActive(!isActive)
											setActiveInput('to')
										}
									}}
									width="130px"
									name={props.name + 'To'}
									onChange={handleChangeDateTo}
									error={props.error}
									isActiveCalendar={isActive}
								/>
							</IputsContainer>
						</div>

						<Calendar _ref={ref} isActive={isActive} clickDay={onClickDay} onChange={handleChangeDate} />
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
								}}
								width="120px"
								name={props.name + 'From'}
								placeholder="Период"
								label="Дата начала"
								// value={valueFrom}
								onChange={handleChangeDateFrom}
								isActiveCalendar={isActive}
							/>
						</div>
						<Calendar _ref={ref} isActive={isActive} clickDay={onClickDay} onChange={handleChangeDate} />
					</div>
				)}
			</StyledDatePicker>
		</DataPickerContext.Provider>
	)
}

export default React.memo(DataPicker)
