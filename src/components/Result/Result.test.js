import React from 'react';
import { render, screen } from '@testing-library/react';

import Result from './Result';


describe('Result', () => {

	it('renders without errors', () => {
		render(<Result />);
	});

	it('contains link to given url', () => {
		render(<Result url='~test/user.html' />);

		expect(screen.getByRole('link')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', 'http://tilde.club/~test/user.html')
	});

});

