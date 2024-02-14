import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = ({ addContactHandler }) => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const navigate = useNavigate();

  const click = (e) => {
    e.preventDefault();
    if (state.name === "" || state.phone === "" || state.email === "") {
      alert("All fields are mandatory");
      return;
    }

    addContactHandler(state);
    setState({ name: "", phone: "", email: "" });

    navigate('/');
  }

  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center mx-auto'>
      <h1 className='my-3'>Add Contact</h1>
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Name"
          aria-label=".form-control-lg example"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <input
          className="form-control form-control-lg my-3"
          type="text"
          placeholder="Phone"
          aria-label=".form-control-lg example"
          value={state.phone}
          onChange={(e) => setState({ ...state, phone: e.target.value })}
        />
        <input
          className="form-control form-control-lg my-3"
          type="text"
          placeholder="E-mail"
          aria-label=".form-control-lg example"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <button className='btn btn-primary btn-lg my-3' onClick={click}>Add</button>
    </div>
  );
}

export default AddContact;
