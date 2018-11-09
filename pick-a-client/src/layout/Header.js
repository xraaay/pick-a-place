import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <header class="masthead" id="page-top">
                <div class="container d-flex h-100 align-items-center">
                    <div class="mx-auto text-center">
                        <h1 class="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>Pick a Place,</h1>
                        <h1 class="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>dammit</h1>
                        {/* <h2 class="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                        <a href="#about" class="btn btn-primary js-scroll-trigger">Get Started</a> */}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header