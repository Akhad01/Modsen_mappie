import React from 'react';
import { Button, TextField } from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';
import {
  loginValidation,
  passwordValidation,
} from '../../constants/validation';
import { FormBlock } from './styled';

interface ISignInForm {
  login: string;
  password: string;
}

interface FormProps {
  handleClick: (email: string, pass: string) => void;
}

const Form = ({ handleClick }: FormProps) => {
  const { handleSubmit, control } = useForm<ISignInForm>();

  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) =>
    handleClick(data.login, data.password);

  return (
    <FormBlock onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="login"
        rules={loginValidation}
        render={({ field }) => (
          <TextField
            label="Логин"
            size="small"
            margin="normal"
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
        name="password"
        rules={passwordValidation}
        render={({ field }) => (
          <TextField
            type="password"
            label="Пароль"
            size="small"
            margin="normal"
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth={true}
        disableElevation={true}
        sx={{
          marginTop: 2,
        }}
      >
        Войти
      </Button>
    </FormBlock>
  );
};

export default Form;
