import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';


describe('Checkbox', () => {

	it('renders without errors', () => {
		render(<Checkbox />);
	});

	it('contains a checkbox element', () => {
		render(<Checkbox />)

		expect(screen.getByRole('checkbox')).toBeInTheDocument()
	})
	
	it('holds the given label', () => {
		render(<Checkbox label={'LABEL'}/>)

		expect(screen.getByText(/LABEL/)).toBeInTheDocument()
	})

	it('calls callback function on click', async () => {
		const fn = jest.fn()
		render(<Checkbox label={'LABEL'} onClick={fn} />)

		expect(screen.getByRole('checkbox')).not.toBeChecked()

		await userEvent.click(screen.getByRole('checkbox'))
		await userEvent.click(screen.getByRole('checkbox'))

		expect(fn).toHaveBeenCalledTimes(2)
	})

});
