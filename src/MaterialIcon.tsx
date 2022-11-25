import { ReactElement, forwardRef, ForwardedRef, ElementType, CSSProperties } from 'react';
import {
	MaterialIconGrade,
	MaterialIconOpticalSize,
	MaterialIconVariant,
	MaterialIconWeight,
	SymbolCodepoints,
} from './types';
import { combineClasses, PolymorphicComponentProps } from './utils';
import './MaterialIcon.css';

export type MaterialIconProps = {
	icon: SymbolCodepoints;
	variant?: MaterialIconVariant;
	fill?: boolean;
	weight?: MaterialIconWeight;
	className?: string;
	style?: CSSProperties;
	grade?: MaterialIconGrade;
	size?: MaterialIconOpticalSize;
	color?: CSSProperties['color'];
};

export const MaterialIcon = forwardRef(function IconInner<C extends React.ElementType>(
	{
		variant = 'outlined',
		icon,
		className,
		onClick,
		as,
		weight,
		fill = false,
		grade,
		size,
		style: propStyle,
		color,
		...props
	}: PolymorphicComponentProps<C, MaterialIconProps>,
	ref: ForwardedRef<C>
): ReactElement {
	const classes = [className, 'material-symbols'];
	const Component = onClick !== undefined ? 'button' : (as as ElementType) ?? 'span';
	const style = { color, ...propStyle };

	switch (variant) {
		case 'outlined':
			classes.push('material-symbols-outlined');
			break;
		case 'rounded':
			classes.push('material-symbols-rounded');
			break;
		case 'sharp':
			classes.push('material-symbols-sharp');
	}

	if (fill)
		style.fontVariationSettings = [style.fontVariationSettings, '"FILL" 1']
			.filter(Boolean)
			.join(', ');
	if (weight)
		style.fontVariationSettings = [style.fontVariationSettings, `"wght" ${weight}`]
			.filter(Boolean)
			.join(', ');
	if (grade)
		style.fontVariationSettings = [style.fontVariationSettings, `"GRAD" ${grade}`]
			.filter(Boolean)
			.join(', ');
	if (size) {
		style.fontVariationSettings = [style.fontVariationSettings, `"opsz" ${size}`]
			.filter(Boolean)
			.join(', ');
		style.fontSize = size;
	}

	return (
		<Component
			{...props}
			style={style}
			onClick={onClick}
			className={combineClasses(...classes)}
			ref={ref}
		>
			{icon}
		</Component>
	);
});
