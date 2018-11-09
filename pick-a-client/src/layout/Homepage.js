import React from 'react';

class Homepage extends React.Component {
    render(){
        return (
            <React.Fragment>
                <header class="masthead" id="page-top">
                    <div class="container d-flex h-100 align-items-center">
                        <div class="mx-auto text-center">
                            <h1 class="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>Pick a Place,</h1>
                            <h2 class="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>dammit</h2>
                            {/* <h2 class="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                            <a href="#about" class="btn btn-primary js-scroll-trigger">Get Started</a> */}
                        </div>
                    </div>
                </header>
                <section id="about" class="about-section text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h2 class="text-white mb-4">What do you want to eat, dammit</h2>
                                <p class="text-white-50">For those who don't know what the to eat.</p>
                            </div>
                        </div>
                        {/* <img src="img/ipad.png" class="img-fluid" alt="" /> */}
                    </div>
                </section>
                <br /><br /><br /><br /><br /><br />
                <div class="featured-text text-center">
                    <p class="text-black-50 mb-0 ">Allow us to decide for you.</p>
                    <button type="button" className="btn btn-primary mx-auto">Roll the Dice</button>
                </div>
                <br /><br /><br /><br /><br /><br />
            </React.Fragment>

        )
    }
}


export default Homepage;