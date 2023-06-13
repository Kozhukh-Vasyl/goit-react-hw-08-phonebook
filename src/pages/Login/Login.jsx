import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { TextField } from '@mui/material';
import { Form, MainButton } from 'assets/styles/common';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <p>Email: "my.email@gmail.com"</p>
        <p>Password:"asdf1234"</p>
        <TextField
          fullWidth
          id="email-outlined-controlled"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="password-outlined-controlled"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <MainButton variant="contained" type="submit">
          Log In
        </MainButton>
      </Form>
    </>
  );
}
