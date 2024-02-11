import React from 'react';

const ContactCard = (props)=>{
    const {id, name, phone, email} = props.contact;
    return(
        <div className='container-fluid my-3'>
                <ul className='list-group w-25'>
                    <li className='list-group-item' style={{backgroundColor:"#EFE1D1"}}>
                        <div className='row'>
                            <i className="fa-solid fa-user fa-2xl col my-4"></i>
                            <div className='col'>
                                <h1>{name}</h1>
                                <p>Phone: {phone}</p>
                                <p>E-mail: {email}</p>
                            </div>
                            <div style={{textAlign:"right"}}>
                                <button className='btn'><i className="fa-solid fa-trash fa-xl my-3"></i></button>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
    )
}

export default ContactCard;