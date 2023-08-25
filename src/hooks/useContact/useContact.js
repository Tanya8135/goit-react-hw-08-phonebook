import { useSelector } from "react-redux";
import { selectFilteredContacts, selectIsLoading } from "redux/contacts/selectors";

export const useContact = () => {
    const isLoading = useSelector(selectIsLoading);
    const filteredContacts = useSelector(selectFilteredContacts);
    const contacts = useSelector(selectFilteredContacts);

    return {
        isLoading,
        filteredContacts,
        contacts,
    };
};