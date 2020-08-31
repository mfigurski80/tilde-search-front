import React from 'react';
import { render } from '@testing-library/react';

import Searchbar from './Searchbar';


describe('Searchbar', () => {
	it('renders without errors', () => {
		render(<Searchbar />);
	});
});

