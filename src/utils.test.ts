import { combineClasses } from './utils';
import { describe, it, expect } from 'vitest';

describe('combineClasses', () => {
	it('should combine classes', () => {
		expect(combineClasses('a', 'b', 'c')).toBe('a b c');
	});

	it('should filter out falsy values', () => {
		expect(combineClasses('a', false, 'b', undefined, 'c')).toBe('a b c');
	});
});
