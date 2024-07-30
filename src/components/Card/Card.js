import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/store';

const Card = ({ id, title, isFavorite }) => {
  // console.log('Card props:', { id, title, isFavorite });
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    console.log('Toggling favorite for card id:', id);
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveCard = () => {
    console.log('Removing card with id:', id);
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        className={clsx(styles.favoriteButton, isFavorite && styles.isFavorite)}
        onClick={handleFavoriteToggle}
      >
        <i className="fa fa-star-o"></i>
      </button>
      <button className={styles.removeButton} onClick={handleRemoveCard}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default Card;
