import Icon from './icon';
import { PolymorphicMaterialSymbolProps } from './icon';
import classes from './css/sharp.module.css';
import { ElementType } from 'react';
import { combineClasses } from './utils';

const Sharp = <C extends ElementType>(props: PolymorphicMaterialSymbolProps<C>) => {
	return <Icon {...props} className={combineClasses(classes.sharp, props.className)} />;
};

export default Sharp;
