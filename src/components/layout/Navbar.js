
import {NavDropdown} from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
<<<<<<< HEAD
  const history = useHistory();
  function logOut() {
    localStorage.clear(); // clear the token from local storage.
    history.push('/auth')
    alert('Logged out');
  }
=======
    const history = useHistory();
    function logOut()
    {
      localStorage.clear();
      history.push('/')
      alert('Logged out');
    }
>>>>>>> 0a70bcd38acddbd967c8bb366f616e6ba6e73e0f
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MODEL MANAGEMENT</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/auth" activeClassName={classes.active}>
              Log ind
            </NavLink>
          </li>
          <li>
            <NavLink to="/models" activeClassName={classes.active}>
              Alle modeler
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-model" activeClassName={classes.active}>
              Tilføj Model
            </NavLink>
          </li>
          <li>
            <NavLink to="/NewJobPage" activeClassName={classes.active}>
              Tilføj nyt job
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-manager" activeClassName={classes.active}>
              Tilføj Manager
            </NavLink>
            </li>
            
          <li>
            <NavLink to="/seeJobs" activeClassName={classes.active}>
              Se alle jobs
            </NavLink>
          </li>
          
          <li>
            <NavDropdown title="LogOut">
              <NavDropdown.Item onClick={logOut}> Logout</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
