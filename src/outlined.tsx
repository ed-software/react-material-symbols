import Icon from './icon';
import type { PolymorphicMaterialSymbolProps } from './icon';
import classes from './css/outlined.module.css';
import type { ElementType } from 'react';
import { combineClasses } from './utils';

const Outlined = <C extends ElementType>(props: PolymorphicMaterialSymbolProps<C>) => {
	return (
		<Icon
			{...props}
			className={combineClasses(classes.outlined, classes['material-symbols'], props.className)}
		/>
	);
};

export default Outlined;
