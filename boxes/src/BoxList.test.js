import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
    render(<BoxList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment).toMatchSnapshot();
});

it('can add a new item', () => {
    const { getByLabelText, getByText } = render(<BoxList />);

    expect(document.querySelector(".Box")).toBeNull();

    const heightBox = getByLabelText("Height (in pixels):");
    const widthBox = getByLabelText("Width (in pixels):");
    const colorPicker = getByLabelText("Color:");
    const submit = getByText("Add Box to page!");

    fireEvent.change(heightBox, { target: { value: '100' } });
    fireEvent.change(widthBox, { target: { value: '50' } });
    fireEvent.change(colorPicker, { target: { value: "#430070" } });
    fireEvent.click(submit);

    expect(document.querySelector(".Box")).not.toBeNull();
});

it('can delete an existing box', () => {
    const { getByLabelText, getByText } = render(<BoxList />);

    const heightBox = getByLabelText("Height (in pixels):");
    const widthBox = getByLabelText("Width (in pixels):");
    const colorPicker = getByLabelText("Color:");
    const submit = getByText("Add Box to page!");

    fireEvent.change(heightBox, { target: { value: '100' } });
    fireEvent.change(widthBox, { target: { value: '50' } });
    fireEvent.change(colorPicker, { target: { value: "#430070" } });
    fireEvent.click(submit);

    expect(document.querySelector(".Box")).not.toBeNull();

    fireEvent.click(getByText("X"));

    expect(document.querySelector(".Box")).toBeNull();
});