import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div className={css.FooterContainer}>
        <p>&copy;{new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
