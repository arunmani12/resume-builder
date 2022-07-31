import classes from './navbar.module.css'

const NavBar = (): JSX.Element => {
  const navBarLinks: string[] = [
    "Home",
    "Templates",
    "Contanct",
    "GitHub",
  ];

  return (
    <header className={classes.header}>
      <a className={classes.logo} href="#">
        A/M
      </a>
      <nav className={classes.nav}>
        <ul>
          {navBarLinks.map((d, i) => (
            <li key={i}>
              <a href="#">{d}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
