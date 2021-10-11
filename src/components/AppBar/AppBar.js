import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import Auth from '../Auth';
import { authSelectors } from '../../redux/auth';
import s from './AppBar.module.css';

export default function AppBarContacts() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <Auth />}
    </header>
  );
}
