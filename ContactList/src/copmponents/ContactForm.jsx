import React, {useState} from "react";

function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phone, email });
        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form__name"
                type="text"
                value={name}
                onChange={(e) =>  setName(e.target.value.trimStart())}
                placeholder="Name"
                required
            />
            <div></div>
            <input
                className="form__phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.trim())}
                placeholder="Phone"
                required

            />
            <input
                className="form__email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="Email"
                required

            />
            <button className="btn" type="submit">Add Contact</button>
        </form>
    );
}

export default ContactForm;