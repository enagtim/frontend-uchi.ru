import HeartButton from '../shared/ui/HeartButton/HeartButton';
import { IEnimal } from './Enimal.interface';
import styles from './EnimalCard.module.css';

function EnimalCard({ ...props }: IEnimal) {
	return (
		<div className={styles.container}>
			<img className={styles.enimal_img} src={props.url} alt="Изображение жиивотного" />
			<div className={styles.heart}>
				<HeartButton url={props.url} enimal_id={props.id} />
			</div>
		</div>
	);
}
export default EnimalCard;
