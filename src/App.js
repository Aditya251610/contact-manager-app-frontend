import React, { useState, useEffect } from 'react';
import Header from './header';
import AddContact from './addContact';
import ContactList from './contactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const contactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieve !== null) {
      setContacts(retrieve);
    }
  }, []); // Empty dependency array to run only once during component mount

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={contactHandler} />
      <hr className='' />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
