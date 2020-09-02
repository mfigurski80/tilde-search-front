import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Searchbar from './Searchbar';


describe('Searchbar', () => {

	it('renders without errors', () => {
		render(<Searchbar />);
	});


	it('contains input and submit button', () => {
		render(<Searchbar />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	})

	it('accepts input', async () => {
		render(<Searchbar />)

		await userEvent.type(screen.getByRole('textbox'), 'SEARCHTERM')

		expect(screen.queryByDisplayValue(/SEARCHTERM/)).toBeInTheDocument()
	})

	it('calls onSearch callback handler', async () => {
		const onSearch = jest.fn()
		render(<Searchbar onSearch={onSearch} />)

		await userEvent.type(screen.getByRole('textbox'), 'SEARCHTERM')
		await userEvent.click(screen.getByRole('button'))

		expect(onSearch).toHaveBeenCalledTimes(1)
		expect(onSearch).toHaveBeenCalledWith('SEARCHTERM')
	})

});

