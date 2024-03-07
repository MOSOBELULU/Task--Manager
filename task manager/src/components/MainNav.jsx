import React from 'react';
// import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';

function MainNav(props) {
  return (
    <div>
      <header className={classes.header}>
        <h1>DashBoard</h1>
        <nav>
          <ul>
            <li>
              Notification
            </li>
            <li>
              Profile
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNav;
