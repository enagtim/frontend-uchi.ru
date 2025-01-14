import { NavLink } from 'react-router';
import styles from './Tab.module.css';
import { ITab } from './Tab.interface';
import cn from 'classnames';

function Tab({ name, url }: ITab) {
	return (
		<NavLink className={({ isActive }) => cn(styles.tab, { [styles.active]: isActive })} to={url}>
			{name}
		</NavLink>
	);
}
export default Tab;
