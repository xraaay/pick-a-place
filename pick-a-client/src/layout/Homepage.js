import React from 'react';

class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.getGeoLocation = this.getGeoLocation.bind(this)
    }

    getGeoLocation(){
        if (navigator.geolocation) {
            this.props.history.push("/rtd")
        } else {
            alert("GeoLocation not available")
        }
    }

    render(){
        return (
            <React.Fragment>
                <header className="masthead" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>Pick a Place,</h1>
                            <h2 className="mx-auto my-0 text-uppercase" style={{pointerEvents:'none'}}>dammit</h2>
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
                    <button type="button" className="btn btn-secondary mx-auto" onClick={this.getGeoLocation}>Roll the Dice</button>
                </div>
                <br /><br /><br /><br /><br /><br />
            </React.Fragment>

        )
    }
}


export default Homepage;