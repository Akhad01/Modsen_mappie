import React from 'react';
import { Typography } from '@mui/material';
import Form from '../Form';
import { SignupForm, SignupText } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/slices/user-slices';
import { setAccessToken } from '../../utils/localStorage';
import { AuthService } from '../../api/AuthService';

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (email: string, password: string) => {
    try {
      const { accessToken } = await AuthService.signup(email, password)

      if (accessToken) {
        dispatch(setUser({ email, token: accessToken }));
        setAccessToken(accessToken);
        navigate('/');
      } else {
        alert('Registration successful but no token returned.');
      }
      } catch (error) {
        alert("Error during registration")
      }
  }

  return (
    <SignupForm>
      <Typography variant="h4" component="div" gutterBottom={true}>
        Зарегистрируйтесь
      </Typography>

      <Form handleClick={handleRegister} />
      <SignupText>
        Already have an account? <Link to="/login">Sign in</Link>
      </SignupText>
    </SignupForm>
  );
};

export default Signup;
