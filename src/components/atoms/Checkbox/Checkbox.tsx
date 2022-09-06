import { ChangeEvent, FC, useState } from 'react'

import CheckMark from '@/assets/checkMark.svg?component'

import {
	ChecboxLabel,
	CheckboxContainer,
	HiddenCheckbox,
	Icon,
	StyledCheckbox
} from './Checkbox.style'

export interface ICheckbox {
	label: string
	checked?: boolean
	onChange?: (item: ChangeEvent<HTMLInputElement>) => void
}
export const Checkbox: FC<ICheckbox> = ({ label, checked, onChange, ...props }) => {
	const defaultChecked = checked ? checked : false
	const [isChecked, setIsChecked] = useState(defaultChecked)
	const handleChange = (item: ChangeEvent<HTMLInputElement>) => {
		setIsChecked((prev) => !prev)
		onChange(item)
	}
	return (
		<CheckboxContainer>
			<label style={{ display: 'flex', alignItems: 'center' }}>
				<HiddenCheckbox
					type="checkbox"
					data-testid="checkbox"
					checked={isChecked}
					onChange={(item) => handleChange(item)}
					{...props}
				/>
				<StyledCheckbox checked={isChecked}>
					<Icon viewBox="-8 -9 24 24">
						<CheckMark width="30px" height="30px"></CheckMark>
					</Icon>
				</StyledCheckbox>
				<ChecboxLabel>{label}</ChecboxLabel>
			</label>
		</CheckboxContainer>
	)
}
export default Checkbox
