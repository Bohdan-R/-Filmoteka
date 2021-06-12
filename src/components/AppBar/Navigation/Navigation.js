import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <div className="nav-container">
      <div className="logo-box">
        <NavLink exact to="/" className="logo">
          Filmoteka
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink exact to="/" className="nav__link">
              In Trend
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink exact to="/movies" className="nav__link">
              Movies
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink exact to="/favourite" className="nav__link">
              Library
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
