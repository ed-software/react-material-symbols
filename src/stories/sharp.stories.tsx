import { ComponentStory, ComponentMeta } from '@storybook/react';

import MaterialSymbol from '../sharp';
import { SymbolCodepointsArray } from '../types';

export default {
	title: 'Sharp',
	component: MaterialSymbol,
	argTypes: {
		icon: { control: 'select', options: SymbolCodepointsArray },
		weight: { control: { type: 'range', min: 100, max: 900, step: 100 } },
		grade: { control: { type: 'range', min: -25, max: 200, step: 5 } },
		size: { control: { type: 'range', min: 0, max: 200, step: 10 } },
		color: { control: 'color' },
		fill: { control: 'boolean' },
	},
} as ComponentMeta<typeof MaterialSymbol>;

const Template: ComponentStory<typeof MaterialSymbol> = (args) => <MaterialSymbol {...args} />;

export const Example = Template.bind({});
Example.args = {
	icon: 'folder',
	fill: false,
	size: 48,
};

const AllTemplate: ComponentStory<typeof MaterialSymbol> = (args) => (
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
);
export const All = AllTemplate.bind({});
All.args = {
	size: 24,
};
