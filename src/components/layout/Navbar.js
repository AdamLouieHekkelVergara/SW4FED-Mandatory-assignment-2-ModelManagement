
import { Nav, NavDropdown, NavItem } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push('/auth')
    alert('Logged out');
  }
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
            <NavLink to="/seeJobs" activeClassName={classes.active}>
              Se alle jobs
            </NavLink>
          </li>
          <li>
            <NavDropdown title="Tilføj">
              <NavDropdown.Item>
                <NavLink to="/NewJobPage" activeClassName={classes.active}>
                  Tilføj nyt job
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/new-model" activeClassName={classes.active}>
                  Tilføj Model
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/new-manager" activeClassName={classes.active}>
                  Tilføj Manager
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
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
