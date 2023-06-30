import React from 'react';

function ContactItem({ contact }) {
    return (
        <li>
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
        </li>
    );
}

export default ContactItem;