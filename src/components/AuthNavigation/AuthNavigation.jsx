import { Link } from 'react-router-dom';
import css from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <ul className={css.AuthNavigation}>
      <li>
        <Link to="/register" className={css.AuthLink}>
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className={css.AuthLink}>
          Log In
        </Link>
      </li>
    </ul>
  );
};

export default AuthNavigation;
