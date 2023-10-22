import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/authOperations';
import { formValidation, inputClean } from 'utils/formValidation.js';
import css from '../ContactForm/ContactForm.module.css';
import style from '../LoginForm/LoginForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formValidation(event.currentTarget) === true) {
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className={style.Registration}>
      <form className={css.contactForm} onSubmit={handleSubmit} noValidate>
        <label className={css.label}>
          <span className={css.labelText}>Name</span>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            placeholder="Enter your name"
            onFocus={input => inputClean(input.target)}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          <span className={css.labelText}>Email</span>
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            pattern="[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$"
            title="Wrong E-mail format!"
            required
            placeholder="Enter email..."
            onFocus={input => inputClean(input.target)}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          <span className={css.labelText}>Password</span>
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
            required
            placeholder="Enter password..."
            onFocus={input => inputClean(input.target)}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.submit}>
          Registration
        </button>
      </form>
    </div>
  );
};
