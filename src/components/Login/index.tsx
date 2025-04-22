import React from 'react';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import Form from '../Form';
import { LoginForm, LoginText } from './styled';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/slices/user-slices';
import { setAccessToken } from '../../utils/localStorage';
import { AuthService } from '../../api/AuthService';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
      try {
        const { accessToken } = await AuthService.login(email, password)

        if (accessToken) {
          dispatch(setUser({ email, token: accessToken }));
          setAccessToken(accessToken);
          navigate('/');
        } else {
          alert('Login successful but no token returned.');
        }
      } catch (error) {
        alert("Error during login")
      }
  }

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
