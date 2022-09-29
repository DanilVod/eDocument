import { cleanup, fireEvent, render } from '@testing-library/react'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
	const CHECKBOX_ID = 'checkbox'
	afterEach(cleanup)
	const { getByTestId } = render(<Checkbox label="test" onChange={() => {}} />)
	const checkbox = getByTestId(CHECKBOX_ID)
	it('Render', () => {})
	expect(checkbox).toBeInTheDocument()
	checkbox
	it('Changes style as checkbox is checked/unchecked', () => {
		expect((checkbox as HTMLInputElement).checked).toEqual(false)
		fireEvent.click(checkbox)
		expect((checkbox as HTMLInputElement).checked).toEqual(true)
	})
})
