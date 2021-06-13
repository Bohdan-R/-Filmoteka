import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import TheatersIcon from '@material-ui/icons/Theaters';
import { ReactComponent as Logo } from '../../../Images/film.svg';
import './Navigation.scss';

export default function Navigation() {
  return (
    <div className="nav-container">
      <div className="logo-box">
        <NavLink exact to="/">
          <Logo /* width="40" height="40"  */ className="logo-icon" />
        </NavLink>
        <NavLink exact to="/" className="logo" data-text="MovieApp">
          MovieApp
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink exact to="/" className="nav__link" activeClassName="nav__link--active">
              In Trend
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink exact to="/movies" className="nav__link" activeClassName="nav__link--active">
              Movies
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              to="/favourite"
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Library
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
