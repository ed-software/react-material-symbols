import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MaterialIcon } from './MaterialIcon';
import {
	MaterialIconGradeArray,
	MaterialIconOpticalSizeArray,
	MaterialIconVariantArray,
	SymbolCodepointsArray,
} from './types';

export default {
	title: 'MaterialIcon',
	component: MaterialIcon,
	argTypes: {
		icon: { control: 'select', options: SymbolCodepointsArray },
		variant: { control: 'select', options: MaterialIconVariantArray },
		weight: { control: { type: 'range', min: 100, max: 900, step: 100 } },
		grade: { control: 'select', options: MaterialIconGradeArray },
		size: { control: 'select', options: MaterialIconOpticalSizeArray },
		color: { control: 'color' },
		fill: { control: 'boolean' },
	},
} as ComponentMeta<typeof MaterialIcon>;

const Template: ComponentStory<typeof MaterialIcon> = (args) => <MaterialIcon {...args} />;

export const Example = Template.bind({});
Example.args = {
	icon: 'folder',
	variant: 'outlined',
	fill: false,
	size: 48,
};

const AllTemplate: ComponentStory<typeof MaterialIcon> = (args) => (
	<>
		{SymbolCodepointsArray.map((symbolCodepoint) => (
			<MaterialIcon {...args} icon={symbolCodepoint} title={symbolCodepoint} />
		))}
	</>
);
export const All = AllTemplate.bind({});
All.args = {
	size: 24,
};
