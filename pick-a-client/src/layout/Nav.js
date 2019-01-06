import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../services/userService'
import { logoutUser } from '../actions'
class Nav extends React.Component {
    constructor(props){
        super(props)
        this.navigate = this.navigate.bind(this)
    }

    navigate(e, target){
        e.preventDefault()
        switch(target){
            case 0:
                this.props.history.push("/")
                break;
            case 1:
                this.props.history.push("/login")
                break;
            case 2:
                this.props.history.push("/register")
                break;
            case 3:
                this.props.history.push("/search")
                break;
            case 4:
                this.props.history.push("/settings")
                break;
            case 5:
                this.props.history.push("/rtd")
                break;
            case 6:
                this.props.history.push("/wyr")
                break;
            case 7:
                logout()
                    .then(() => this.props.logout())
                    .then(() => this.props.history.push("/"))
                    .catch(console.error)
                break;
            default:
                console.log("error")
        } 
    }
    render(){
        let route = this.props.location.pathname
        const navbar = route === "/" ? null : {zIndex: 0, position: "inherit"}
        const title = route === "/" ? null : {color: '#161616'}
        const buttons = route === "/" ? null : {color: 'rgba(0, 0, 0, 0.5)'}
        const loggedIn = this.props.user.user ? (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link js-scroll-trigger" onClick={e => {this.navigate(e, 1)}} style={buttons}>Log In</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link js-scroll-trigger" onClick={e => {this.navigate(e, 2)}} style={buttons}>Sign Up</a>
                </li>
            </ul>
        ) : (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link js-scroll-trigger" onClick={e => {this.navigate(e, 6)}} style={buttons}>Would You Rather</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link js-scroll-trigger" onClick={e => {this.navigate(e, 5)}} style={buttons}>Roll The Dice</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link js-scroll-trigger" onClick={e => {this.navigate(e, 3)}} style={buttons}>Search</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link js-scroll-trigger" onClick={e => {this.navigate(e, 4)}} style={buttons}>History</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link js-scroll-trigger" onClick={e => {this.navigate(e, 7)}} style={buttons}>Logout</a>
                </li>
            </ul>
        )
        return (
            <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav" style={navbar}>
                        <div className="container">
                            <a href="#" className="navbar-brand js-scroll-trigger"style={title} onClick={e => {this.navigate(e, 0)}}>Pick a Place</a>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                {loggedIn}
                            </div>
                        </div>
                    </nav>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))