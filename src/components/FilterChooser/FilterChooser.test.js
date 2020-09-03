import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterChooser from './FilterChooser';


jest.mock('./filters', () => [{prompt: 'PROMPTA', func: null}, {prompt: 'PROMPTB', func: null}])

describe('FilterChooser', () => {


	it('renders without errors', () => {
		render(<FilterChooser />);
	});

	it('shows checkboxes and prompts of given list of filters', () => {
		render(<FilterChooser />);

		expect(screen.getByText(/PROMPTA/)).toBeInTheDocument()
		expect(screen.getByText(/PROMPTB/)).toBeInTheDocument()
		expect(screen.getAllByRole('checkbox').length).toBe(2)
	});

	it('calls callback with activated filters on choose', async () => {
		const fn = jest.fn()
		render(<FilterChooser onChoose={fn} />)

		await userEvent.click(screen.getAllByRole('checkbox')[0])

		expect(fn).toBeCalledTimes(1)
		expect(fn).toBeCalledWith([{prompt: 'PROMPTA', func: null}])

		await userEvent.click(screen.getAllByRole('checkbox')[1])

		expect(fn).toBeCalledTimes(2)
		expect(fn).toBeCalledWith([{prompt: 'PROMPTA', func: null}, {prompt: 'PROMPTB', func: null}])

		await userEvent.click(screen.getAllByRole('checkbox')[0])

		expect(fn).toBeCalledWith([{prompt: 'PROMPTB', func: null}])
	})

});
