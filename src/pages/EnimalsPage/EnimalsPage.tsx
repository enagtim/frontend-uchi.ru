/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { IEnimal } from '../../entity/Enimal.interface';
import axios from 'axios';
import styles from './EnimalsPage.module.css';
import EnimalCard from '../../entity/EnimalCard';

function EnimalsPage() {
	const [enimals, setEnimals] = useState<IEnimal[]>([]);
	const [loading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [hasMore, setHasMore] = useState<boolean>(true);

	const loader = useRef<HTMLDivElement | null>(null);

	const getEnimals = async () => {
		if (loading) return;
		setIsLoading(true);
		try {
			const { data } = await axios.get<IEnimal[]>('https://api.thecatapi.com/v1/images/search', {
				params: { limit: 100 },
				headers: {
					'x-api-key': 'live_TBLnlWhrOf7nxEWZfpocXXqiT6NcaF5wmgPCGo1NuTGmFeF74R6kCcE7JyUFtdlA',
					'Content-Type': 'application/json',
				},
			});
			if (data.length === 0) {
				setHasMore(false);
			} else {
				setEnimals((prev) => [...prev, ...data]);
			}
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			}
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		getEnimals();
	}, []);

	const handleScroll = () => {
		if (loader.current) {
			const buttom = loader.current.getBoundingClientRect().bottom;
			if (buttom <= window.innerHeight && !loading && hasMore) {
				getEnimals();
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [loading, hasMore]);

	if (loading && enimals.length === 0) {
		return <p>Загрузка....</p>;
	}
	if (error) {
		return <p>Ошибка: {error}</p>;
	}
	return (
		<div className={styles.card_container}>
			{enimals.map((enimal) => (
				<EnimalCard key={enimal.id} id={enimal.id} url={enimal.url} />
			))}
			{loading && <p>Загружаем еще котиков...</p>}
			<div ref={loader}></div>
		</div>
	);
}
export default EnimalsPage;
