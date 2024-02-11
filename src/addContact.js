import React from 'react';

class AddContact extends React.Component {
    state = {
        name:"",
        phone:"",
        email:""
    };

    click = (e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.phone === "" || this.state.email ===""){
            alert("All feilds are manadatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", phone: "", email: ""});
    }
    render(){
        return(
            <div className='container-fluid d-flex flex-column justify-content-center align-items-center mx-auto'>
                <h1 className='my-3'>Add Contact</h1>
                <div>
                    <input 
                        className="form-control form-control-lg" 
                        type="text" 
                        placeholder="Name" 
                        aria-label=".form-control-lg example"
                        value={this.state.name}
                        onChange={(e)=> this.setState({ name: e.target.value })}
                        >
                    </input>
                    <input 
                        className="form-control form-control-lg my-3" 
                        type="text" 
                        placeholder="Phone" 
                        aria-label=".form-control-lg example"
                        value={this.state.phone}
                        onChange={(e)=> this.setState({ phone: e.target.value })}
                        >
                    </input>
                    <input 
                        className="form-control form-control-lg my-3" 
                        type="text"
                        placeholder="E-mail" 
                        aria-label=".form-control-lg example"
                        value={this.state.email}
                        onChange={(e)=> this.setState({ email: e.target.value })}>
                    </input>
                </div>
                <button className='btn btn-primary btn-lg my-3' onClick={this.click}>Add</button>
            </div>
        )
    }
}

export default AddContact;