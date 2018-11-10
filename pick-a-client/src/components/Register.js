import React from 'react';
import * as userService from '../services/userService'
import "./Register.css"
class Register extends React.Component {
constructor(props){
    super(props)
    this.state = {
        username: '',
        email: '',
        password: ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.register = this.register.bind(this)
}

inputChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

register(){
    const data = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    }
    userService.register(data)
        .then(console.log)
        .catch(console.log)
}


render(){
    return (
        <React.Fragment>
            <div className="container">
                <h2>Register</h2>
                <form className="col-sm-12 remove-padding">
                    <div className="col-sm-6 remove-padding">
                        <label>Username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="col-sm-6 remove-padding">
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="col-sm-6 remove-padding">
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.inputChange} className="form-control" />
                    </div>
                </form>
                <br></br>
                <button type="button" class="btn btn-primary mx-auto" onClick={this.register}>Register</button>
            </div>
        </React.Fragment>
    )
}
}

export default Register