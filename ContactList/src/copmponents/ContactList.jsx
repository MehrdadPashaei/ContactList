import React, {useState} from "react";
import ContactForm from "./ContactForm.jsx";
import ContactItem from "./ContactItem.jsx";

function ContactsList() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addContact = (contact) => {
        setContacts((prevContacts) => [...prevContacts, contact]);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredContacts = contacts.filter(
        (contact) =>
            contact.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
            contact.phone.startsWith(searchTerm) ||
            contact.email.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className="list">
            <h1>Contact List</h1>
            <ContactForm onSubmit={addContact} />
            <input
                className="list__search"
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
            />
            <ul>
                {filteredContacts.map((contact, index) => (
                    <ContactItem contact={contact} key={index}/>
                ))}
            </ul>
        </div>
    );
}

export default ContactsList