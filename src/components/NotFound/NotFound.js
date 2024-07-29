import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <PageTitle>404 Not Found</PageTitle>
      <p className={styles.content}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
