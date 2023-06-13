import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { DeleteBtn } from 'assets/styles/common';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{
        border: '1,5px solid grey',
        borderRadius: 4,
        '& .MuiListItemText-primary': {
          fontWeight: 'bold',
        },
      }}
    >
      <ListItemAvatar>
        <Avatar
        // alt={`Avatar n°${value + 1}`}
        // src={`/static/images/avatar/${value + 1}.jpg`}
        />
      </ListItemAvatar>
      <ListItemText
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <p>{number}</p>
      </ListItemText>
      <DeleteBtn
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </DeleteBtn>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
