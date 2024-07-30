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
        <div className={styles.cardsDiv}>
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        </div>
      ) : (
        <h2 className={styles.subtitle}>No cards yet...</h2>
      )}
    </div>
  );
};

export default Favorite;
