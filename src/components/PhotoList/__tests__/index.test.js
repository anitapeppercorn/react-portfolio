import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

const category = 'commercial';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
	it('renders', () => {
		render(<PhotoList category={category} />);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(<PhotoList category={category} />);
		expect(asFragment()).toMatchSnapshot();
	});

	test('images render', () => {
		const { getByTestId } = render(<PhotoList category={category} />);
		expect(getByTestId('img0')).toHaveAttribute('src', '0.jpg');
	});
});
