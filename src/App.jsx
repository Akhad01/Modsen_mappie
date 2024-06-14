import { Route, Routes } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={REGISTRATION_ROUTE} element={<Signup />} />
      <Route path={MAIN_ROUTE} element={<Main />} />
    </Routes>
  );
}

export default App;
