import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Adding contacts
const AddContact = ({ addContactHandler, contacts }) => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleEnterKey = (event, nextElement) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (nextElement === 'submit') {
        click(event);
      } else {
        document.getElementById(nextElement).focus();
      }
    }
  };

  const click = (e) => {
    e.preventDefault();
    if (state.name === "" || state.phone === "" || state.email === "") {
      alert("All fields are mandatory");
      return;
    }

    const contactExists = contacts.some(contact =>
      contact.phone === state.phone || contact.email === state.email
    );

    if (contactExists) {
      alert("Contact with the same phone number or email already exists");
      return;
    }

    addContactHandler(state);
    setState({ name: "", phone: "", email: "" });

    navigate('/');
  };

  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center mx-auto'>
      <h1 className='my-3'>Add Contact</h1>
      <div>
        <input
          id="nameInput"
          className="form-control form-control-lg"
          type="text"
          placeholder="Name"
          aria-label=".form-control-lg example"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          onKeyDown={(e) => handleEnterKey(e, 'phoneInput')}
        />
        <input
          id="phoneInput"
          className="form-control form-control-lg my-3"
          type="text"
          placeholder="Phone"
          aria-label=".form-control-lg example"
          value={state.phone}
          onChange={(e) => setState({ ...state, phone: e.target.value })}
          onKeyDown={(e) => handleEnterKey(e, 'emailInput')}
        />
        <input
          id="emailInput"
          className="form-control form-control-lg my-3"
          type="text"
          placeholder="E-mail"
          aria-label=".form-control-lg example"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          onKeyDown={(e) => handleEnterKey(e, 'submitButton')}
        />
      </div>
      <button
        id="submitButton"
        className='btn btn-primary btn-lg my-3'
        onClick={click}
      >
        Add
      </button>
    </div>
  );
}

export default AddContact;
