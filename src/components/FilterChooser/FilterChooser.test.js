import React from 'react';
import { render } from '@testing-library/react';

import FilterChooser from './FilterChooser';


describe('FilterChooser', () => {
	it('renders without errors', () => {
		render(<FilterChooser />);
	});
});
