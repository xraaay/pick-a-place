import React from 'react';
import { Button } from 'reactstrap'

class HelpPage extends React.Component {


    render(){
        return (
            <React.Fragment>
                {this.props.match.params.type === "wyr" ? 
                (
                    <div className="container">
                        <div className="card">
                            <div className="container text-center mb-4 mt-4">
                                <h5>Would You Rather</h5>
                                <h6>As default, we will give you two random options.</h6>
                                <h6>Choose the option you prefer, and after 5 rounds there will be your final two options for you to choose from</h6>
                                <h6 className="mb-3">You can also define your search by adding parameters</h6>
                                <Button type="button" className="btn btn-secondary mx-auto" onClick={e => {this.props.history.push("/wyr")}}>Okay</Button>
                                <Button type="button" className="btn btn-secondary ml-4">Search</Button> 
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="card">
                            <div className="container text-center mb-4 mt-4">
                                <h5>Roll The Dice</h5>
                                <h6>3 randomly generated options</h6>
                                <h6>You may also define your own search query</h6>
                                <h6 className="mb-3">You can also define your search by adding parameters</h6>
                                <Button type="button" className="btn btn-secondary mx-auto" onClick={e => {this.props.history.push("/wyr")}}>Give me options</Button>
                                <Button type="button" className="btn btn-secondary ml-4">Let Me Search</Button> 
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default HelpPage