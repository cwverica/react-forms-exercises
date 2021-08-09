import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
    const formData = {
        'bgcolor': '',
        'width': '',
        'height': ''
    }
    render(<NewBoxForm formData={formData} />);
});

it('matches snapshot', () => {
    const formData = {
        'bgcolor': '',
        'width': '',
        'height': ''
    }
    const { asFragment } = render(<NewBoxForm formData={formData} />);
    expect(asFragment).toMatchSnapshot();
});