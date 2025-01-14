import { Heart } from 'lucide-react';
import styles from './HeartButton.module.css';
import useFavoritesStore from '../../../store/favoritesStore';

function HeartButton({ enimal_id, url }: { enimal_id: string; url: string }) {
	const favorites = useFavoritesStore((state) => state.favorites);
	const addFavorite = useFavoritesStore((state) => state.addFavorite);
	const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

	const isActive = favorites.some((fav) => fav.id === enimal_id);

	const handleClick = () => {
		if (isActive) {
			removeFavorite(enimal_id);
		} else {
			addFavorite({ id: enimal_id, url });
		}
	};

	return (
		<button
			className={`${styles.heartButton} ${isActive ? styles.active : ''}`}
			onClick={handleClick}
		>
			<Heart className={styles.heartIcon} />
		</button>
	);
}
export default HeartButton;
