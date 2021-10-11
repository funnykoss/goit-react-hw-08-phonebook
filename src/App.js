import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBarContacts from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import { authOperations } from './redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authSelectors } from './redux/auth';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsViewPage from './views/ContactsViewPage';

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBarContacts />

        <Switch>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsViewPage />
          </PrivateRoute>
        </Switch>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    )
  );
}

// export default App;
