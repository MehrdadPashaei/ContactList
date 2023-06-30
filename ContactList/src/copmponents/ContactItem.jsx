import React from 'react';

function ContactItem({ contact,index }) {
    return (
        <li key={index}>
            <p>Name:<span>{contact.name}</span> </p>
            <p>Phone:<span>{contact.phone}</span></p>
            <p>Email:<span>{contact.email}</span></p>
        </li>
    );
}

export default ContactItem;