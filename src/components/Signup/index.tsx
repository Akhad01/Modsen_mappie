import { Typography } from '@mui/material';
import Form from '../Form';
import { SignupForm, SignupText } from './styled';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <SignupForm>
      <Typography
        variant='h4'
        component='div'
        gutterBottom={true}
        className='auth'
      >
        Зарегистрируйтесь
      </Typography>

      <Form />
      <SignupText>
        Already have an account? <Link to='/login'>Sign in</Link>
      </SignupText>
    </SignupForm>
  );
};

export default Signup;
