import { render, screen } from '@testing-library/react'

import { Typography } from './Typography'

describe('Typography', () => {
	it('Render', () => {
		render(<div>Test</div>)
		const childrenText = screen.getByText(/Test/i)
		expect(childrenText).toBeInTheDocument()
	})
})
