import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { ContactForm } from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
// import ContactEditor from "components/ContactEditor";
import { Filter } from "components/Filter/Filter";
import { fetchContacts } from "redux/contacts/operations";


export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <h1>Phonebook</h1>
            <ContactForm />
            {/* <ContactEditor /> */}
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    )
};