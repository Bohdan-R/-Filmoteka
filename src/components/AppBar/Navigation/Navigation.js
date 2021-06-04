import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <div>
        <NavLink exact to="/">
          Filmoteka
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              In Trend
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
