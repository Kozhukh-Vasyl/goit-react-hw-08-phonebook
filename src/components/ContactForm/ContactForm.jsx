import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Form } from 'assets/styles/common';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MainButton } from 'assets/styles/common';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const isIncludes = items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isIncludes
      ? toast.error(
          <span>
            <b>{name}</b> is already in contacts
          </span>
        )
      : dispatch(addContacts({ name, number }));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <TextField
          fullWidth
          id="name-outlined-controlled"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            required: true,
          }}
        />
      </Box>

      <Box>
        <TextField
          fullWidth
          id="number-outlined-controlled"
          label="Phone"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          inputProps={{
            pattern:
              '\\+?\\d{0,3}[-\\s]?\\(?\\d{1,3}\\)?[-\\s]?\\d{1,4}[-\\s]?\\d{1,4}[-\\s]?\\d{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            required: true,
          }}
          autoComplete="on"
        />
      </Box>

      <MainButton variant="contained" type="submit">
        Add contact
      </MainButton>
    </Form>
  );
}
