import React from 'react';
import ContactCard from './contactCard';

const ContactList = (props) =>{
    const renderContactList = props.contacts.map((contacts) =>{
        return(
            <ContactCard contact={contacts}></ContactCard>
        );
    });

    return(
        <div>
            {renderContactList}
        </div>
    );
}

export default ContactList;