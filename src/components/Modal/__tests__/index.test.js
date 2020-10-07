import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Modal from '..';

const mockCurrentPhoto = {
	name: 'Grocery aisle',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
	category: 'commercial',
	index: 0,
};
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
	it('renders', () => {
		render(
			<Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />
		);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(
			<Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />
		);

		expect(asFragment()).toMatchSnapshot();
	});
});

describe('Click Event', () => {
	it('calls onClose handler', () => {
		const { getByText } = render(
			<Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />
		);

		fireEvent.click(getByText('Close this modal'));

		expect(mockToggleModal).toHaveBeenCalledTimes(1);
	});
});
