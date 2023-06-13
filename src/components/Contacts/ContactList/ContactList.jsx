import PropTypes from 'prop-types';
import Contact from '../Contact';
import { ContactMUIList } from './ContactList.styled';

const ContactList = ({ contacts, visibleContacts }) => {
  return contacts ? (
    <ContactMUIList>
      {visibleContacts.map(({ id, name, number }) => {
        return <Contact key={id} name={name} number={number} id={id} />;
      })}
    </ContactMUIList>
  ) : (
    <></>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.number.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
