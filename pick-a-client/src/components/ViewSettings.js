import React from 'react';
import axios from 'axios';
import { Card, CardText,
        Button, CardDeck,
        Badge } from 'reactstrap';

class ViewSettings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            settings: []
        }
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

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="col-sm-12">
                        <CardDeck>
                            {this.state.settings[0] ? this.state.settings.map(item => {
                                return (
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="col-sm-3">
                                            {/* <CardTitle>Location: {item.Location}</CardTitle>
                                            <CardSubtitle>Radius: {item.Radius}mi</CardSubtitle> */}
                                            <CardText>
                                                <h4 style={{textAlign:'center'}}>{item.Name}</h4>
                                                <p><strong>Location: </strong>{item.Location} <span className="glyphicon glyphicon-pencil"></span></p>
                                                <p><strong>Status: </strong>
                                                    {item.OpenNow 
                                                        ?<Badge color="success">Open Now</Badge>
                                                        :<Badge color="danger">Closed</Badge>
                                                    }
                                                </p>
                                                <p><strong>Price: </strong>{JSON.parse(item.Price)}</p>
                                            </CardText>
                                            <Button>Select</Button>
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