import React, { ChangeEvent, FC, useState } from 'react'

import { Checkbox, Dropdown } from '@/components/atoms'

import { IStatusFilter } from '@/types/filters'

export type checkboxType = {
	statusName: string
	checked?: boolean
}

const StatusFilter: FC<IStatusFilter> = ({ statusNames, onChange }) => {
	const [checkboxs, setCheckboxs] = useState<checkboxType[]>(
		statusNames.map((statusName) => ({ statusName }))
	)

	const handleChange = (checkedBox: ChangeEvent<HTMLElement>) => {
		if (typeof checkedBox !== null) {
			const copyCheckboxs = [...checkboxs]

			setCheckboxs(
				copyCheckboxs.map((checkbox: checkboxType) =>
					checkbox.statusName === (checkedBox?.target?.parentNode as HTMLElement).innerText
						? { ...checkbox, checked: !checkbox.checked }
						: checkbox
				)
			)
		}

		onChange(checkboxs.filter((el) => el.checked))
	}
	console.log(checkboxs)
	return (
		<Dropdown label="Статус">
			{checkboxs.map((checkbox, index) => (
				<Checkbox
					key={index}
					label={checkbox.statusName}
					onChange={handleChange}
					checked={(checkbox.checked = false)}
				/>
			))}
		</Dropdown>
	)
}

export default StatusFilter
