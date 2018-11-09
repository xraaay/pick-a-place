import React from 'react';
import { Form, div, label, input } from 'reactstrap';
import "./Register.css"
class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <h2>Register</h2>
                    <form className="col-sm-12 remove-padding">
                        <div className="col-sm-6 remove-padding">
                            <label>Username</label>
                            <input type="text" name="username" className="form-control" />
                        </div>
                        <div className="col-sm-6 remove-padding">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" />
                        </div>
                        <div className="col-sm-6 remove-padding">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" />
                        </div>
                    </form>
                    <br></br>
                    <button type="button" class="btn btn-primary mx-auto">Register</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Register