import React from 'react';
import axios from 'axios';
import { Card, CardTitle, CardText, Button, CardDeck, Badge, ButtonToolbar, ButtonGroup } from 'reactstrap';

class ViewSettings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            settings: []
        }
        this.rollTheDice = this.rollTheDice.bind(this);
        this.wouldYouRather = this.wouldYouRather.bind(this)
    }

    componentDidMount(){
        this.getAllSettings()
    }

    getAllSettings(){
        let url = "/api/settings"
        const config = {
            method: 'GET'
        }
        let response = axios(url, config)
            .then(response => {
                this.setState({
                    settings: response.data
                })
            })
            .catch(console.log)
        return response
    }

    rollTheDice(id){
        this.props.history.push("/rtd/" + id)
    }

    wouldYouRather(id){
        this.props.history.push("/wyr/" + id)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="col-sm-12">
                        <CardDeck>
                            {this.state.settings[0] ? this.state.settings.map(item => {
                                let price = JSON.parse(item.Price).sort((a, b) => a-b);
                                let dollarSign = price.map((item, index) => (index ? ', ': "") + "$".repeat(item))
                                return (
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="col-sm-4">
                                            {/* <CardTitle>Location: {item.Location}</CardTitle>
                                            <CardSubtitle>Radius: {item.Radius}mi</CardSubtitle> */}
                                            <CardTitle className="text-center">
                                                {item.Name}
                                            </CardTitle>
                                            <CardText>
                                                <span>
                                                    <strong>Location: </strong>
                                                    <br></br>
                                                    {item.Location}
                                                </span> 
                                                <span className="glyphicon glyphicon-pencil"></span>
                                                <br></br>
                                                <span><strong >Open Now: </strong>
                                                    {item.OpenNow 
                                                        ?<Badge color="success">Yes</Badge>
                                                        :<Badge color="danger">No</Badge>
                                                    }
                                                </span>
                                                <br></br>
                                                <span><strong>Price: </strong>{dollarSign}</span>
                                            </CardText>
                                            <ButtonGroup>
                                                <Button outline color="info" onClick={e => {this.rollTheDice(item.Id)}}>RTD</Button>
                                                <Button outline color="primary" onClick={e => {this.wouldYouRather(item.Id)}}>WYR</Button>
                                            </ButtonGroup>
                                        </Card>
                                )})
                                :null
                            }
                        </CardDeck>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ViewSettings