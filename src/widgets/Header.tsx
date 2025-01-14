import { Outlet } from 'react-router';
import Tab from '../shared/ui/Tab/Tab';
import styles from './Header.module.css';
import BurgerMenu from '../shared/ui/BurgerMenu/BurgerMenu';

function Header() {
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.navigation}>
					<div className={styles.tabs}>
						<Tab url="/" name="Все котики" />
						<Tab url="/favorite-enimals" name="Любимые котики" />
					</div>
					<BurgerMenu />
				</nav>
			</header>
			<div className={styles.body}>
				<Outlet />
			</div>
		</>
	);
}
export default Header;
