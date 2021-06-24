import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import className from 'classnames';
import { ReactComponent as Logo } from '../../../Images/film.svg';
import './Navigation.scss';

export default function Navigation() {
  const location = useLocation();

  console.log(location);
  return (
    <div className="nav-container">
      <div className="logo-box">
        <NavLink exact to="/">
          <Logo className="logo-icon" />
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
              className={className('nav__link', {
                'nav__link--active':
                  location.pathname === '/queue' || location.pathname === '/watched',
              })}
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
