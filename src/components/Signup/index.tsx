import { Typography } from '@mui/material';
import Form from '../Form';
import { SignupForm, SignupText } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../../store/slices/user-slices';

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(() => alert('Invalid user'));
  };

  return (
    <SignupForm>
      <Typography variant='h4' component='div' gutterBottom={true}>
        Зарегистрируйтесь
      </Typography>

      <Form handleClick={handleRegister} />
      <SignupText>
        Already have an account? <Link to='/login'>Sign in</Link>
      </SignupText>
    </SignupForm>
  );
};

export default Signup;
