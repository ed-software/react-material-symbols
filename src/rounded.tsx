import Icon from './icon';
import { PolymorphicMaterialSymbolProps } from './icon';
import classes from './css/rounded.module.css';
import { ElementType } from 'react';
import { combineClasses } from './utils';

const Rounded = <C extends ElementType>(props: PolymorphicMaterialSymbolProps<C>) => {
	return <Icon {...props} className={combineClasses(classes.rounded, props.className)} />;
};

export default Rounded;
