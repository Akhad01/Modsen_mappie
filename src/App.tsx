import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import { APP_ROUTES } from './constants/app-routes';

function App() {
  return (
    <Routes>
      <Route path={APP_ROUTES.LOGIN} element={<Login />} />
      <Route path={APP_ROUTES.REGISTRATION} element={<Signup />} />
      <Route path={APP_ROUTES.MAIN} element={<Main />} />
    </Routes>
  );
}

export default App;
