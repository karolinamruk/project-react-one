import Container from '../Container/Container';
import styles from './NavBar.module.scss';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navContent}>
          {/* <span className={styles.icon + ' fa fa-tasks'} /> */}
          <a href="/" className={styles.icon + ' fa fa-tasks'}></a>
          <ul className={styles.navLinks}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/favorite"
              >
                Favorite
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
