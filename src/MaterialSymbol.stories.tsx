import { ComponentStory, ComponentMeta } from '@storybook/react';

import MaterialSymbol from './MaterialSymbol';
import {
	MaterialSymbolGradeArray,
	MaterialSymbolOpticalSizeArray,
	MaterialSymbolVariantArray,
	SymbolCodepointsArray,
} from './types';

export default {
	title: 'MaterialSymbol',
	component: MaterialSymbol,
	argTypes: {
		icon: { control: 'select', options: SymbolCodepointsArray },
		variant: { control: 'select', options: MaterialSymbolVariantArray },
		weight: { control: { type: 'range', min: 100, max: 900, step: 100 } },
		grade: { control: 'select', options: MaterialSymbolGradeArray },
		size: { control: 'select', options: MaterialSymbolOpticalSizeArray },
		color: { control: 'color' },
		fill: { control: 'boolean' },
	},
} as ComponentMeta<typeof MaterialSymbol>;

const Template: ComponentStory<typeof MaterialSymbol> = (args) => <MaterialSymbol {...args} />;

export const Example = Template.bind({});
Example.args = {
	icon: 'folder',
	variant: 'outlined',
	fill: false,
	size: 48,
};

const AllTemplate: ComponentStory<typeof MaterialSymbol> = (args) => (
	<>
		{SymbolCodepointsArray.map((symbolCodepoint) => (
			<MaterialSymbol {...args} icon={symbolCodepoint} title={symbolCodepoint} />
		))}
	</>
);
export const All = AllTemplate.bind({});
All.args = {
	size: 24,
};
