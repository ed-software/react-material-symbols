import type { Classes } from './types';

/**
 * Combines an array of classes into a single space delimited-string.
 *
 * @param classes List of input classes. Values are filtered out if they evaluate to `false`. See {@link Boolean}.
 */
export function combineClasses(...classes: Classes): string {
	return (classes.filter(Boolean) as string[]).map((c) => c.trim()).join(' ');
}
