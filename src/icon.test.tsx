import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import Outlined from './outlined';
import Rounded from './rounded';
import Sharp from './sharp';

describe('Icon', () => {
	it('should render outlined', () => {
		const { asFragment } = render(<Outlined icon='folder' />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render rounded', () => {
		const { asFragment } = render(<Rounded icon='folder' />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render sharp', () => {
		const { asFragment } = render(<Sharp icon='folder' />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render with props', () => {
		const { asFragment } = render(
			<Sharp icon='folder' fill weight={100} grade={4} size={32} color='red' as='button' />
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
