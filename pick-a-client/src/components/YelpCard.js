import React from 'react';
import Rating from 'react-rating'
import { Card, CardImg, CardText, CardTitle, Badge, Button, Collapse, ListGroup, ListGroupItem } from 'reactstrap'
import WaitList from './WaitList'

class YelpCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapse: false,
            waitList: [],
            scraped: false
        }
    }

    render(){
        let distance = Math.round(this.props.result.distance / 1600)
        return (
            <React.Fragment>
                <Card key={this.props.result.id}>
                    <a href={this.props.result.url}>
                        <div style={{height:"231.762px", display:'flex', alignItems:'center', overflow:'hidden'}}>
                            <CardImg src={this.props.result.image_url} style={{flex:'none', width:'100%'}}/>
                        </div>
                    </a>
                    <CardTitle className="text-center"><strong>{this.props.result.name}</strong></CardTitle>
                    <CardText className="text-center">
                        <Rating 
                            readonly={true}
                            initialRating={this.props.result.rating} 
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                            />
                        <br></br>
                        <span className="text-center">{this.props.result.is_closed 
                            ?<Badge color="danger" pill>Closed</Badge>
                            :<Badge color="success" pill>Open</Badge>
                        }
                        </span>
                        <br></br>
                        <strong>{`${this.props.result.location.address1}, ${this.props.result.location.city}, ${this.props.result.location.zip_code}`}</strong>
                        <br></br>
                        <strong>{this.props.result.display_phone}</strong>
                    </CardText>
                    <CardText className="col-sm-12">
                        <strong>Distance:</strong> { distance <= 1 ? + distance + " mile" : distance + " miles"} 
                        <br></br>
                        <strong>Price:</strong> {this.props.result.price}
                        <br></br>
                        <strong>Reviews:</strong> {this.props.result.review_count}
                        <br></br>
                        <strong>Categories:</strong> {this.props.result.categories.map((item, index) => {
                            return (index ? ', ': "") + item.title
                        })}
                    </CardText>
                </Card>
                {/* <a href={this.props.result.url} style={{textDecoration: 'none'}}>
                    <Button block>Visit Yelp Page</Button>
                </a> */}
                {/* <WaitList alias={this.props.result.alias} /> */}
            </React.Fragment>
        )
    }
}

export default YelpCard