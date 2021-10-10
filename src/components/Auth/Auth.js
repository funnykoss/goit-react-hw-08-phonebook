import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Auth.module.css';

export default function Auth() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
