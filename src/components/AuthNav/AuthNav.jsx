import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.navBox}>
      <div className={css.linkBox}>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </div>
      <div className={css.linkBox}>
        <NavLink className={css.link} to="/login">
          Log in
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
