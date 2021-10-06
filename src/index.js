import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*PersistGate используется для реализации redux-persist. В props передаем 1)loading, в который можно указать какой-либо preloader; 2) persistor  - ссылка на сам persistor, который заимпортирован из файла store.js*/}
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
