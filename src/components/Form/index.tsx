import { Button, TextField } from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';

interface ISignInForm {
  login: string;
  password: string;
}

const Form = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();

  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);
  return (
    <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='login'
        rules={{ required: 'Обязательно для заполнения' }}
        render={({ field }) => (
          <TextField
            label='Логин'
            size='small'
            margin='normal'
            className='auth-form__input'
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.login?.message}
            helperText={errors.login?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        rules={{ required: 'Обязательно для заполнения' }}
        render={({ field }) => (
          <TextField
            label='Пароль'
            size='small'
            margin='normal'
            className='auth-form__input'
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
        )}
      />
      <Button
        type='submit'
        variant='contained'
        fullWidth={true}
        disableElevation={true}
        sx={{
          marginTop: 2,
        }}
      >
        Войти
      </Button>
    </form>
  );
};

export default Form;
