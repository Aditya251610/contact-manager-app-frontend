import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './contactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            console.log("Searching for:", search);
        }
    }

    const handleSearchClick = () => {
        console.log("Searching for:", search);
    }

    const renderContactList = props.contacts.map((contact) => {
        if (search.trim() === "") {
            return (
                <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
            );
        } else {
            if (contact.name.toLowerCase().includes(search.toLowerCase()) || contact.email.toLowerCase().includes(search.toLowerCase())) {
                return (
                    <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
                );
            }
            return null;
        }
    });

    return (
        <div>
            <div className='row'>
                <div className='col d-flex'>
                    <h1 className='mx-auto my-2'>Contact List</h1>
                    <Link to='/add'>
                        <button className='btn btn-primary btn-lg my-2 mx-2 flex-end'>Add Contact</button>
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='col mx-2 my-3'>
                    <div className="input-group mb-3">
                        <input
                            id='search'
                            type='search'
                            className='form-control form-control-lg'
                            placeholder='Search'
                            value={search}
                            onChange={handleChange}
                            onKeyDown={handleEnterKey}
                        />
                        <button
                            className='btn btn-outline-secondary'
                            type='button'
                            onClick={handleSearchClick}
                        >
                            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>{renderContactList}</div>
            </div>
        </div>
    );
}

export default ContactList;
