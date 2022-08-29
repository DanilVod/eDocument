import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
	it('Render', () => {
		render(<Button>Hi</Button>)
		const childrenText = screen.getByText(/Hi/i)
		expect(childrenText).toBeInTheDocument()
	})
})
