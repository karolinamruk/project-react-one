import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite Cards</PageTitle>
      {favoriteCards.length > 0 ? (
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card isFavorite={card.isFavorite} />
          ))}
        </ul>
      ) : (
        <h2 className={styles.subtitle}>No cards yet...</h2>
      )}
    </div>
  );
};

export default Favorite;
