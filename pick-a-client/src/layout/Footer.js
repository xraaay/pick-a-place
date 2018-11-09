import React from 'react';

class Homepage extends React.Component {
    render(){
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default Homepage