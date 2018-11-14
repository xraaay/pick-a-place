import React from 'react';
import * as yelpService from '../services/yelpService'
import { CardDeck, Card, CardImg, CardImgOverlay, 
        CardText, CardTitle, CardColumns, Badge } from 'reactstrap'
import Rating from 'react-rating'

class RollTheDice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            results: []
        }
        this.rtd = this.rtd.bind(this)
    }

    componentDidMount(){
        this.getGeoLocation();
    }

    getGeoLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.rtd)
        } else {
            alert("GeoLocation not available")
        }
    }

    shuffleResults(arr){
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    rtd(position){
        const query = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            term: "restaurant",
            radius: 16000,
            limit: 50,
            open_now: true,
            price: 1
        }
        yelpService.search(query)
            .then(response => {
                let shuffle = this.shuffleResults(response.data.businesses)
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
                <div className="container">
                    <CardColumns>
                        {this.state.results[0] && this.state.results.map(item => {
                            let distance = Math.round(item.distance / 1600)
                            return (
                                
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
                                        <strong>Reviews:</strong> {item.review_count}
                                        <br></br>
                                        <strong>Categories:</strong> {item.categories.map((item, index) => {
                                            return (index ? ', ': "") + item.title
                                        })}
                                    </CardText>
                                    <br />
                                </Card>
                            )
                        })}
                    </CardColumns>
                </div>
            </React.Fragment>
        )
    }
}

export default RollTheDice