import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
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

const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsViewPage = lazy(() =>
  import('./views/ContactsView/ContactsView'),
);
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
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute path="/register">
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login">
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsViewPage />
            </PrivateRoute>
          </Suspense>
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
