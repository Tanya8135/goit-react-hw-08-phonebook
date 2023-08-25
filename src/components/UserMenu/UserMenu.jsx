import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <div className={css.boxBorder}>
        <p className={css.username}>
          Welcom, <span className={css.name}>{user.name}</span>
        </p>
        <p className={css.useremail}>{user.email}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
