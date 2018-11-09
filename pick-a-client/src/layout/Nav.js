import React from 'react';
import { withRouter } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props){
        super(props)
        this.toSignup = this.toSignup.bind(this)
    }
    toSignup(e){
        e.preventDefault()
        this.props.history.push("/register")
    }
    render(){
        let route = this.props.location.pathname
        const navbar = route === "/" ? null : {zIndex: 0, position: "inherit"}
        const title = route === "/" ? null : {color: '#161616'}
        const buttons = route === "/" ? null : {color: 'rgba(0, 0, 0, 0.5)'}
        return (
            <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav" style={navbar}>
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger"style={title}>Pick a Place</a>
                            {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                            </button> */}
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#" style={buttons}>Log In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link js-scroll-trigger" onClick={this.toSignup} style={buttons}>Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </React.Fragment>
        )
    }
}

export default withRouter(Nav)