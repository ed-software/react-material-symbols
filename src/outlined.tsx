import Icon from './icon';
import { PolymorphicMaterialSymbolProps } from './icon';
import classes from './css/outlined.module.css';
import { ElementType } from 'react';
import { combineClasses } from './utils';

const Outlined = <C extends ElementType>(props: PolymorphicMaterialSymbolProps<C>) => {
	return <Icon {...props} className={combineClasses(classes.outlined, props.className)} />;
};

export default Outlined;
