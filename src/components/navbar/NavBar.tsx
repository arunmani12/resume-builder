import { Link } from 'react-router-dom';
import classes from './navbar.module.css'



const NavBar = ({IsAuthorized,setIsAuthorized}:{IsAuthorized:boolean,setIsAuthorized:React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element => {
  const navBarLinks: string[] = [
    "Home",
    "Templates",
    "GitHub",
  ];

  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        R/B
      </Link>
      <nav className={classes.nav}>
        <ul>
          {navBarLinks.map((d, i) => (
            <li key={i}>
              <Link to={d==='Home' ? '/' : `/${d}`}>{d}</Link>
            </li>
          ))}
          <li>
         {!IsAuthorized && <Link to='/login'>Login</Link>}
          {!IsAuthorized && <Link to='/register'>Register</Link>}
          {IsAuthorized && <Link onClick={()=>setIsAuthorized(prv=>!prv)} to='/'>Logout</Link>}
         </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
