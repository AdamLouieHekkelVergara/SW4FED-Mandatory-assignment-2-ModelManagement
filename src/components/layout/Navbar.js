import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
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
            <NavLink to="/auth" activeClassName={classes.active}>
              Log ud
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
