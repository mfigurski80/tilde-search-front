import React from 'react';
import { render } from '@testing-library/react';

import Result from './Result';


describe('Result', () => {
    it('renders without errors', () => {
        expect(render(<Result />));
    });
});

