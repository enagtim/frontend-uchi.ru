import EnimalCard from '../../entity/EnimalCard';
import useFavoritesStore from '../../store/favoritesStore';
import styles from './FavoriteEnimalsPage.module.css';

function FavoriteEnimalsPage() {
	const favorites = useFavoritesStore((state) => state.favorites);
	return (
		<>
			{favorites.length > 0 ? (
				<div className={styles.favorite_container}>
					{favorites.map((enimal) => (
						<EnimalCard key={enimal.id} id={enimal.id} url={enimal.url} />
					))}
				</div>
			) : (
				<p>Добавленных котиков нет пока что...(:</p>
			)}
		</>
	);
}
export default FavoriteEnimalsPage;
