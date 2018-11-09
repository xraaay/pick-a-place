import React from 'react';

class Homepage extends React.Component {
    render(){
        return (
            <React.Fragment>
                <header className="masthead" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>Pick a Place,</h1>
                            <h2 className="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>dammit</h2>
                            {/* <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                            <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a> */}
                        </div>
                    </div>
                </header>
                <section id="about" className="about-section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-white mb-4">What do you want to eat, dammit</h2>
                                <p className="text-white-50">For those who don't know what the to eat.</p>
                            </div>
                        </div>
                        {/* <img src="img/ipad.png" className="img-fluid" alt="" /> */}
                    </div>
                </section>
                <br /><br /><br /><br /><br /><br />
                <div className="featured-text text-center">
                    <p className="text-black-50 mb-0 ">Allow us to decide for you.</p>
                    <button type="button" className="btn btn-primary mx-auto">Roll the Dice</button>
                </div>
                <br /><br /><br /><br /><br /><br />
            </React.Fragment>

        )
    }
}


export default Homepage;