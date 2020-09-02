import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';


describe('Button', () => {

	it('renders without errors', () => {
		render(<Button />)
	})

	it('has a button role', () => {
		render(<Button />)

		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('displays children', () => {
		render(<Button>TEXT</Button>)

		expect(screen.getByText('TEXT')).toBeInTheDocument()
	})

	it('calls onClick callback handler on click', async () => {
		const onClick = jest.fn()
		render(<Button onClick={onClick}>TEXT</Button>)

		await userEvent.click(screen.getByRole('button'))

		expect(onClick).toHaveBeenCalledTimes(1)
	});

});
