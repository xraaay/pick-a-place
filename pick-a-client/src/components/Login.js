import React from 'react';
import * as userService from '../services/userService'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import { setUser } from '../actions/index'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.login = this.login.bind(this)
    }

    inputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login(){
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        userService.login(data)
            .then(() => {
                let user = this.props.cookies.get('myCookie')
                if(user){
                    this.props.setUser(user)
                }
            })
            .catch(console.log)
    }


    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <h2>Login</h2>
                    <form className="col-sm-12 remove-padding">
                        <div className="col-sm-6 remove-padding">
                            <label>Username</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.inputChange} className="form-control" />
                        </div>
                        <div className="col-sm-6 remove-padding">
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.inputChange} className="form-control" />
                        </div>
                    </form>
                    <br></br>
                    <button type="button" className="btn btn-primary mx-auto" onClick={this.login}>login</button>
                </div>
        </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default withCookies(connect(null, mapDispatchToProps)(Login))