import { create } from 'zustand';
import { IEnimal } from '../entity/Enimal.interface';

interface FavoriteStore {
	favorites: IEnimal[];
	addFavorite: (enimal: IEnimal) => void;
	removeFavorite: (enimal_id: string) => void;
}
const loadFavorites = (): IEnimal[] => {
	try {
		const savedFavorites = localStorage.getItem('favorites');
		return savedFavorites ? JSON.parse(savedFavorites) : [];
	} catch (error) {
		console.error('Ошибка при загрузке избранных фильмов из localstorage', error);
		return [];
	}
};
const savedFavorites = (favorites: IEnimal[]): void => {
	try {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	} catch (error) {
		console.error('Ошибка при сохранении избранных в localStorage', error);
	}
};
const useFavoritesStore = create<FavoriteStore>((set) => ({
	favorites: loadFavorites(),
	addFavorite: (enimal: IEnimal) =>
		set((state) => {
			const updatedFavorites = [...state.favorites, enimal];
			savedFavorites(updatedFavorites);
			return { favorites: updatedFavorites };
		}),
	removeFavorite: (enimal_id: string) =>
		set((state) => {
			const updatedFavorites = state.favorites.filter((enimal) => enimal.id !== enimal_id);
			savedFavorites(updatedFavorites);
			return { favorites: updatedFavorites };
		}),
}));

export default useFavoritesStore;
