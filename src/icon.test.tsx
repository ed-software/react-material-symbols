import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { MaterialSymbol } from './index';

describe('Icon', () => {
	it('should render icon', () => {
		const { asFragment } = render(<MaterialSymbol icon='folder' />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render with props', () => {
		const { asFragment } = render(
			<MaterialSymbol icon='folder' fill weight={100} grade={4} size={32} color='red' as='button' />
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should take a ref', () => {
		const ref = { current: null };
		render(<MaterialSymbol icon='folder' ref={ref} />);
		expect(ref.current).not.toBe(null);
	});
});
