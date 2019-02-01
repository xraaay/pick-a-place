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
                                <h3>Would You Rather</h3>
                                <h6>As default, we will give you two random options.</h6>
                                <h6>Choose the option you prefer, and after 5 rounds there will be your final two options for you to choose from</h6>
                                <h6 className="mb-3">You can also define your search by adding parameters</h6>
                                <Button type="button" className="mx-auto" onClick={e => {this.props.history.push("/wyr")}}>Decide For Me</Button>
                                <Button type="button" className="ml-4">Custom Search</Button> 
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="card">
                            <div className="container text-center mb-4 mt-4">
                                <h3>Roll The Dice</h3>
                                <h6>3 randomly generated options</h6>
                                <h6>You may also define your own search query</h6>
                                <h6 className="mb-3">You can also define your search by adding parameters</h6>
                                <Button type="button" className="mx-auto" onClick={e => {this.props.history.push("/rtd")}}>Decide For Me</Button>
                                <Button type="button" className="ml-4">Let Me Search</Button> 
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default HelpPage