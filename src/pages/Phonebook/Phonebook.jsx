import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/Contacts/ContactList';
import ScrollTopButton from 'components/ScrollTop';
import { PageContainer } from 'assets/styles/common';

export default function Phonebook() {
  const filterState = useSelector(getFilter);
  const { items, isLoading, error } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(changeFilter(value));
  };

  const getVisibleContacts = () =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filterState.toLowerCase())
    );

  return (
    <PageContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter filter={filterState} handleChangeFilter={handleChangeFilter} />
      {isLoading && <p>Loading contacts...</p>}
      {items.length > 0 && (
        <ContactList
          contacts={items.length}
          visibleContacts={getVisibleContacts()}
        />
      )}
      {error && <p>{error}</p>}
      <ScrollTopButton />
    </PageContainer>
  );
}
