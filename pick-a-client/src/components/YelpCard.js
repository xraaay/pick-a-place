import React from 'react';
import Rating from 'react-rating'
import { Card, CardImg, CardText, 
        CardTitle, Badge } from 'reactstrap'


class YelpCard extends React.Component {
    render(){
        let distance = Math.round(this.props.result.distance / 1600)
        return (
            <Card key={this.props.result.id}>
                <a href={this.props.result.url}>
                    <div style={{height:"231.762px", display:'flex', alignItems:'center', overflow:'hidden'}}>
                        <CardImg src={this.props.result.image_url} style={{flex:'none', width:'100%'}}/>
                    </div>
                </a>
                <CardTitle className="text-center">{this.props.result.name}</CardTitle>
                <CardText className="text-center">
                    <Rating 
                        readonly={true}
                        initialRating={this.props.result.rating} 
                        // emptySymbol="glyphicon glyphicon-heart-empty"
                        // fullSymbol="glyphicon glyphicon-heart"
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
                <br />
            </Card>
        )
    }
}

export default YelpCard