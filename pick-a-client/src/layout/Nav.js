import React from 'react';

class Nav extends React.Component {
    toSignup(){
        this.props.history.push("/register")
    }
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">Pick a Place</a>
                    {/* <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#">Log In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" onClick={this.toSignup}>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav