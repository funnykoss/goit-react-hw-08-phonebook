import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterView.module.css';

export default function RegisterView() {
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Регистрация пользователя</h1>

      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Имя
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Почта
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
