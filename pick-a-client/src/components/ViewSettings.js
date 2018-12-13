import React from 'react';
import { Card, CardTitle, CardText, Button, CardDeck, Badge, ButtonGroup } from 'reactstrap';
import * as settingsService from '../services/settingsService'

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
        settingsService.getAll()
            .then(response => {
                this.setState({
                    settings: response.items
                })
            })
            .catch(console.log)
    }

    rollTheDice(id){
        this.props.history.push("/rtd/" + id)
    }

    wouldYouRather(id){
        this.props.history.push("/wyr/" + id)
    }

    deleteSetting(id){
        settingsService.deleteById(id)
            .then(() => {this.getAllSettings()})
            .catch(console.error)
    }

    toForm(id){
        this.props.history.push("/search/" + id)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="col-sm-12">
                        <CardDeck>
                            {this.state.settings[0] ? this.state.settings.map(item => {
                                let price = JSON.parse(item.price).sort((a, b) => a-b);
                                let dollarSign = price.map((item, index) => (index ? ', ': "") + "$".repeat(item))
                                return (
                                    <div className="col-sm-4">
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: '5px' }}>
                                            {/* <CardTitle>Location: {item.Location}</CardTitle>
                                            <CardSubtitle>Radius: {item.Radius}mi</CardSubtitle> */}
                                            <CardTitle className="text-center">
                                                {item.name}
                                                <a href="#" onClick={e => {this.deleteSetting(item.id)}}><i className="fas fa-trash-alt" style={{color: 'white', position: 'absolute', top: 0, right: 0, padding:'10px'}}></i></a>
                                            </CardTitle>
                                            <CardText>
                                                <span>
                                                    <strong>Location: </strong>
                                                    <br></br>
                                                    {item.location || "Current Location"}
                                                </span> 
                                               
                                                <br></br>
                                                <span><strong >Open Now: </strong>
                                                    {item.openNow 
                                                        ?<Badge color="success">Yes</Badge>
                                                        :<Badge color="danger">No</Badge>
                                                    }
                                                </span>
                                                <br></br>
                                                <span><strong>Price: </strong>{dollarSign}</span>
                                            </CardText>
                                            <ButtonGroup>
                                                <div style={{width: "100%"}}>
                                                    <Button className="col-sm-4" outline color="info" onClick={e => {this.rollTheDice(item.id)}}>RTD</Button>
                                                    <Button className="col-sm-4" outline color="success" onClick={e => {this.toForm(item.id)}}>Edit</Button>
                                                    <Button className="col-sm-4" outline color="primary" onClick={e => {this.wouldYouRather(item.id)}}>WYR</Button>
                                                </div>
                                            </ButtonGroup>
                                        </Card>
                                    </div>
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