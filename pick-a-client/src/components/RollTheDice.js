import React from 'react';
import * as yelpService from '../services/yelpService'
import { CardDeck, Card, CardImg, CardImgOverlay, 
        CardText, CardTitle, CardColumns, Badge } from 'reactstrap'

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

    rtd(position){
        const query = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            term: "food",
            radius: 16000,
            limit: 3,
            open_now: true
        }
        yelpService.search(query)
            .then(response => {
                this.setState({
                    results: response.data.businesses
                })
            })
            .catch(console.log)
    }
//     alias: "howlin-rays-los-angeles-3"
// categories: [{alias: "southern", title: "Southern"}, {alias: "chickenshop", title: "Chicken Shop"},…]
// coordinates: {latitude: 34.0614861063899, longitude: -118.239554800093}
// display_phone: "(213) 935-8399"
// distance: 2415.825659522988
// id: "7O1ORGY36A-2aIENyaJWPg"
// image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/6HVQrC1EzLBN7XZ432vlgA/o.jpg"
// is_closed: false
// location: {address1: "727 N Broadway", address2: "Ste 128", address3: "", city: "Los Angeles", zip_code: "90012",…}
// name: "Howlin' Ray's"
// phone: "+12139358399"
// price: "$$"
// rating: 4.5
// review_count: 4169
// transactions: []
// url: "https://www.yelp.com/biz/howlin-rays-los-angeles-3?adjust_creative=_pcCqq4RrrR6Ghe_CCHdgg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_s

    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <CardColumns>
                        {this.state.results[0] && this.state.results.map(item => {
                            return (
                                <Card key={item.id}>
                                    <div style={{width:"348px", height:"231.762px", display:'flex', alignItems:'center', overflow:'hidden'}}>
                                        {/* <span style={{display: 'inline-block', height:'100%', verticalAlign:'middle'}}></span> */}
                                        {/* <span style={{display: 'inline-block', height:'100%', verticalAlign:'middle'}}></span> */}
                                        <CardImg src={item.image_url} style={{flex:'none', width:'100%'}}/>
                                    </div>
                                    <CardImgOverlay>
                                    </CardImgOverlay>
                                    <CardTitle className="text-center">{item.name}</CardTitle>
                                    <CardText className="text-center">
                                        <h5>{item.is_closed 
                                            ?<Badge color="danger">Closed</Badge>
                                            :<Badge color="success">Open</Badge>
                                        }
                                        </h5>
                                        {`${item.location.address1}, ${item.location.city}, ${item.location.zip_code}`}
                                        <p>{item.display_phone}</p>
                                    </CardText>
                                    <CardText className="col-sm-12">
                                        <p><strong>Distance:</strong> {Math.round(item.distance / 1600) + " miles"}</p>
                                        <strong>Categories:</strong> {item.categories.map((item, index) => {
                                            return (index ? ', ': "") + item.title
                                        })}
                                    </CardText>
                                    {/* <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText> */}
                                    <br></br>
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