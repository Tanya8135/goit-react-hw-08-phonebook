import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import InputAdornments from 'components/InputLibStyle';

import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <p className={css.subTitle}>Username</p>
        <input type="text" name="name" required />
      </label>
      <label className={css.label}>
        <p>Email</p>
        <input type="email" name="email" required />
      </label>
      <label className={css.label}>
        <p>Password</p>
        <InputAdornments>
          <input type="password" name="password" className={css.int} required />
        </InputAdornments>
      </label>
      <button type="submit" className={css.btn}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
