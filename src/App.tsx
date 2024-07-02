import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignupPage from './pages/SignupPage';
import { APP_ROUTES } from './constants/app-routes';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={APP_ROUTES.REGISTRATION} element={<SignupPage />} />
      <Route path={APP_ROUTES.MAIN} element={<MainPage />} />
    </Routes>
  );
}

export default App;
