import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './contactCard';

const ContactList = (props) =>{
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contacts) =>{
        return(
            <ContactCard contact={contacts} clickHandler = {deleteContactHandler} key={ contacts.id }></ContactCard>
        );
    });

    return(
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
                <div className='col'>{renderContactList}</div>
            </div>
        </div>
    );
}

export default ContactList;