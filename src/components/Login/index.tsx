import { Typography } from '@mui/material';
import Form from '../Form';
import { LoginForm } from './styled';

const Login = () => {
  return (
    <LoginForm>
      <Typography
        variant='h4'
        component='div'
        gutterBottom={true}
        className='auth'
      >
        Войдите
      </Typography>

      <Form />
    </LoginForm>
  );
};

export default Login;
