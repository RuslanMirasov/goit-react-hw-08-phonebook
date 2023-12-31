import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Loading from 'components/Loading/Loading';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Add new contact:">
        <ContactForm />
      </Section>

      {error && (
        <Section>
          <Notification message={error}></Notification>
        </Section>
      )}

      {!error && contacts.length === 0 && (
        <Section>
          <Notification message="There is no contacts in Phonebook!"></Notification>
        </Section>
      )}

      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />

          {isLoading && <Loading />}
          {!isLoading && <ContactList />}
        </Section>
      )}
    </>
  );
};

export default Contacts;
