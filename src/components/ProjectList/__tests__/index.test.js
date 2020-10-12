import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectList from '..';

const category = 'commercial';

afterEach(cleanup);

describe('ProjectList is rendering', () => {
	it('renders', () => {
		render(<ProjectList category={category} />);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(<ProjectList category={category} />);
		expect(asFragment()).toMatchSnapshot();
	});

	test('images render', () => {
		const { getByTestId } = render(<ProjectList category={category} />);
		expect(getByTestId('img0')).toHaveAttribute('src', '0.jpg');
	});
});
