import css from './Header.module.css';

const Header = ({ children }) => {
  return (
    <header className={css.Header}>
      <div className={css.HeaderContainer}>{children}</div>
    </header>
  );
};

export default Header;
