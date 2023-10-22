import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <div className={css.userMenu}>
      <p className={css.user}>{userEmail}</p>
      <button type="button" onClick={() => dispatch(logout())} className={css.LogoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
