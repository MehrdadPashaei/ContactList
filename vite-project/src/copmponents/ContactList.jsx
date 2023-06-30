import React, {useState} from "react";
import ContactForm from "./ContactForm.jsx";

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
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.includes(searchTerm) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(contacts)

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
                    <li key={index}>
                        <p>Name:  <span>{contact.name}</span> </p>
                        <p>Phone: <span>{contact.phone}</span></p>
                        <p>Email: <span>{contact.email}</span></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactsList