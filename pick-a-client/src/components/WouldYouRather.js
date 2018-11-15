import React from 'react';
import * as settingsService from '../services/settingsService'
import * as yelpService from '../services/yelpService'
import { shuffleResults, getGeoLocation } from '../services/resuseableFunctions'


class WouldYouRather extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            choiceOne: {},
            choiceTwo: {},
            results: []
        }
        this.wyr = this.wyr.bind(this)
    }

    componentDidMount(){
        getGeoLocation(wyr)
    }

    wyr(position){
        let promise;
        let query = {}
        if(this.props.match.params.id){
            promise = settingsService.searchById(this.props.match.params.id)
        } else {
            query = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                term: "restaurant",
                radius: 16000,
                limit: 50,
                open_now: true,
                price: 1
            }
            promise = yelpService.search(query)
        }
        promise
            .then(response => {
                let shuffle = shuffleResults(response.data.businesses)
                let three = shuffle.slice(0,3)
                this.setState({
                    results: three
                })
            })
            .catch(console.log)
    }

    render(){
        return (
            <React.Fragment>
                {this.results.map(item => {
                    <Card key={item.id}>
                        <a href={item.url}>
                            <div style={{height:"231.762px", display:'flex', alignItems:'center', overflow:'hidden'}}>
                                <CardImg src={item.image_url} style={{flex:'none', width:'100%'}}/>
                            </div>
                        </a>
                        <CardTitle className="text-center">{item.name}</CardTitle>
                        <CardText className="text-center">
                            <Rating 
                                readonly={true}
                                initialRating={item.rating} 
                                // emptySymbol="glyphicon glyphicon-heart-empty"
                                // fullSymbol="glyphicon glyphicon-heart"
                            />
                            <h5 className="text-center">{item.is_closed 
                                ?<Badge color="danger" pill>Closed</Badge>
                                :<Badge color="success" pill>Open</Badge>
                            }
                            </h5>
                            <strong>{`${item.location.address1}, ${item.location.city}, ${item.location.zip_code}`}</strong>
                            <br></br>
                            <strong>{item.display_phone}</strong>
                        </CardText>
                        <CardText className="col-sm-12">
                            <strong>Distance:</strong> { distance <= 1 ? + distance + " mile" : distance + " miles"} 
                            <br></br>
                            <strong>Price:</strong> {item.price}
                            <br></br>
                            <strong>Reviews:</strong> {item.review_count}
                            <br></br>
                            <strong>Categories:</strong> {item.categories.map((item, index) => {
                                return (index ? ', ': "") + item.title
                            })}
                        </CardText>
                        <br />
                    </Card>
                })}
            </React.Fragment>
        )
    }
}

export default WouldYouRather