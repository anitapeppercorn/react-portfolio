import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
	//First test
	it('renders', () => {
		render(<Contact />);
	});
	//Second test
	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<Contact />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders h1 tag', () => {
		const { getByTestId } = render(<Contact />);
		expect(getByTestId('contact-h1')).toHaveTextContent('Contact me');
	});

	it('renders submit button', () => {
		const { getByTestId } = render(<Contact />);
		expect(getByTestId('contact-submit')).toHaveTextContent('Submit');
	});
});
