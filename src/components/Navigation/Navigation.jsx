import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';

import { selectTheme } from 'redux/contacts/selectors';

import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const darkTheme = useSelector(selectTheme);

  const textClassName = darkTheme ? css.darkText : css.lightText;

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <p className={`${css.text} ${textClassName}`}>Home</p>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <p className={css.text}>Contacts</p>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
