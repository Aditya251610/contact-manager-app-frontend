import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import AddContact from './addContact';
import ContactList from './contactList';
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, { id: uuid(), ...newContact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
