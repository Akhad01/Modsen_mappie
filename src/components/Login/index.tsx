import React from 'react';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Form from '../Form';
import { LoginForm, LoginText } from './styled';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/slices/user-slices';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch(() => alert('Invalid user'));
  };

  return (
    <LoginForm>
      <Typography variant="h4" component="div" gutterBottom={true}>
        Войдите
      </Typography>

      <Form handleClick={handleLogin} />
      <LoginText>
        Or <Link to="/registration">register</Link>
      </LoginText>
    </LoginForm>
  );
};

export default Login;
