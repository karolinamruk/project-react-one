import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ id, title, isFavorite }) => {
  // console.log('Card props:', { id, title, isFavorite });
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleCardFavorite(id));
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
    </li>
  );
};

export default Card;
