import { useEffect } from 'react';
import { lazy, Suspense } from 'react';

// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import s from './App.module.css';
// import RegisterView from './views/RegisterView.js';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import { authOperations } from './redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsViewPage = lazy(() =>
  import('./views/ContactsView/ContactsView'),
);
function App() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <AppBar />

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
      </Container>
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
    </>
  );
}

export default App;
