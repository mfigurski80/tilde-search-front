import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ResultFilter from './ResultFilter';


describe('ResultFilter', () => {

	const dict = { 'term': { 'url': 0.5 } }

	it('renders without errors', () => {
		render(<ResultFilter />);
	});

	it('filters to correct terms', () => {
		render(<ResultFilter dict={dict} query='term' />)

		expect(screen.getByRole('link')).toBeInTheDocument()
		expect(screen.getByRole('link')).toHaveAttribute('href', 'http://tilde.club/url')
	})

});
