import { useState } from 'react';
import styles from './BurgerMenu.module.css';
import { X, Menu } from 'lucide-react';
import Tab from '../Tab/Tab';

function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div className={styles.burgerMenu}>
			<button onClick={toggleMenu} className={styles.menuButton}>
				{isOpen ? <X color="#FFF" size={24} /> : <Menu size={24} color="#FFF" />}
			</button>
			{isOpen && (
				<nav className={styles.menu}>
					<Tab url="/" name="Все котики" />
					<Tab url="/favorite-enimals" name="Любимые котики" />
				</nav>
			)}
		</div>
	);
}

export default BurgerMenu;
