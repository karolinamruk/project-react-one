import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navContent}>
          {/* <span className={styles.icon + ' fa fa-tasks'} /> */}
          <a href="/" className={styles.icon + ' fa fa-tasks'}></a>
          <ul className={styles.navLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/favorite">Favorite</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
