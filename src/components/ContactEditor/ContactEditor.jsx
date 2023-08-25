import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { setStatusFilter } from 'redux/contacts/filterSlice';

import css from './ContactEditor.module.css';

const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contact = form.elements.contact.value;
    if (contact !== '') {
      dispatch(addContact(contact));
      form.reset();
      return;
    }
    alert('Contact cannot be empty. Enter some contact!');
  };

  return (
    <div>
      <h2>Editor</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="text"
          className={css.input}
          onChange={event => dispatch(setStatusFilter(event.target.value))}
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactEditor;
