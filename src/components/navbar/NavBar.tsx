import { Link } from 'react-router-dom';
import classes from './navbar.module.css'

const NavBar = (): JSX.Element => {
  const navBarLinks: string[] = [
    "Home",
    "Templates",
    "GitHub",
  ];

  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        A/M
      </Link>
      <nav className={classes.nav}>
        <ul>
          {navBarLinks.map((d, i) => (
            <li key={i}>
              <Link to={d==='Home' ? '/' : `/${d}`}>{d}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
