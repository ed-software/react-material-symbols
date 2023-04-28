import type { Meta, StoryObj } from '@storybook/react';
import { SymbolCodepointsArray } from '../consts';

import { MaterialSymbol } from '../index';

export default {
	component: MaterialSymbol,
	argTypes: {
		icon: { control: 'select', options: SymbolCodepointsArray },
		weight: { control: { type: 'range', min: 100, max: 900, step: 100 } },
		grade: { control: { type: 'range', min: -25, max: 200, step: 5 } },
		size: { control: { type: 'range', min: 0, max: 200, step: 10 } },
		color: { control: 'color' },
		fill: { control: 'boolean' },
	},
} satisfies Meta<typeof MaterialSymbol>;

export const Example: StoryObj = {
	render: (args) => <MaterialSymbol {...args} />,
	args: {
		icon: 'folder',
		fill: false,
		size: 48,
	},
};

export const All: StoryObj = {
	render: (args) => (
		<>
			{SymbolCodepointsArray.map((symbolCodepoint) => (
				<MaterialSymbol
					{...args}
					icon={symbolCodepoint}
					key={symbolCodepoint}
					title={symbolCodepoint}
				/>
			))}
		</>
	),
	args: {
		size: 24,
	},
};
