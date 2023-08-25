import { useDispatch } from 'react-redux';
import { useContact } from 'hooks/useContact';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, contacts } = useContact();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        {isLoading && <Loader />}
        <ul className={css.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
              <span className={css.contactInfo}>{contact.name}:</span>
              <span className={css.contactInfo}>{contact.number}</span>
              <button
                type="button"
                className={css.btnDelete}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
