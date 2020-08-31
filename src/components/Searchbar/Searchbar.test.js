import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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


});

