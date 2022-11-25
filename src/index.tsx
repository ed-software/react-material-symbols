import { ReactElement, ElementType, CSSProperties } from 'react';
import { MaterialSymbolVariant, MaterialSymbolWeight, SymbolCodepoints } from './types';
import { combineClasses, PolymorphicComponentProps } from './utils';
import './style.css';

export type MaterialSymbolProps = {
	/** Required. The name of the icon to render. */
	icon: SymbolCodepoints;
	/** Default `'outlined'`.
	 *
	 * Three main styles material icons can come in. */
	variant?: MaterialSymbolVariant;
	/** Default `false`.
	 *
	 * Fill gives you the ability to modify the default icon style. A single icon can render both unfilled and filled states. */
	fill?: boolean;
	/** Weight defines the symbol’s stroke weight, with a range of weights between thin (100) and heavy (900). Weight can also affect the overall size of the symbol. */
	weight?: MaterialSymbolWeight;
	/** Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. */
	grade?: number;
	/** Default `'inherit'`.
	 *
	 * Size defines the icon width and height in pixels. For the image to look the same at different sizes, the stroke weight (thickness) changes as the icon size scales. */
	size?: number;
	/** Default `'inherit'`
	 *
	 * Color accepts key values (`'red'`, `'blue'`, `'indigo'`, etc.), `<hex-color>`, `<rgb()>`, `<hsl()>` and `<hwb()>` values.  */
	color?: CSSProperties['color'];
	className?: string;
	style?: CSSProperties;
};

export type PolymorphicMaterialSymbolProps<C extends React.ElementType> = PolymorphicComponentProps<
	C,
	MaterialSymbolProps
>;

const MaterialSymbol = <C extends ElementType>({
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
}: PolymorphicMaterialSymbolProps<C>): ReactElement => {
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
		<Component {...props} style={style} onClick={onClick} className={combineClasses(...classes)}>
			{icon}
		</Component>
	);
};

export default MaterialSymbol;
