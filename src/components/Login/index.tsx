import { Typography } from '@mui/material';
import Form from '../Form';
import { LoginForm, LoginText } from './styled';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginForm>
      <Typography variant='h4' component='div' gutterBottom={true}>
        Войдите
      </Typography>

      <Form />
      <LoginText>
        Or <Link to='/registration'>register</Link>
      </LoginText>
    </LoginForm>
  );
};

export default Login;
