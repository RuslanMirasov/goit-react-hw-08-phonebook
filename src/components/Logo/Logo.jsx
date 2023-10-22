import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <NavLink to="/" className={css.Logo}>
      <img width="40" src={logo} alt="logo" />
      <p>Phonebook</p>
    </NavLink>
  );
};

export default Logo;
