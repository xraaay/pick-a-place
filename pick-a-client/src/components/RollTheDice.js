import React from 'react';
import * as yelpService from '../services/yelpService'
import { CardColumns } from 'reactstrap'
import { shuffleResults } from '../services/resuseableFunctions'
import YelpCard from './YelpCard';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import swal from 'sweetalert2'

class RollTheDice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            results: [],
            loaded: false
        }
        this.rtd = this.rtd.bind(this);
        this.reroll = this.reroll.bind(this)
    }

    componentDidMount(){
        if(this.props.data.search){
            this.rtd()
        } else {
            this.getGeoLocation();
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.data.search !== this.props.data.search){
            this.rtd()
        }
    }

    getGeoLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.rtd, function(){
                swal({
                    type: "error",
                    title: "Location not found",
                    text: "Make sure you have https:// at the front of the url and allow location access. You can also use the Search functionality instead"
                })
            })
        } else {
            swal({
                type: "error",
                title: "Location not found",
                text: "Make sure you have https:// at the front of the url and allow location access. You can also use the Search functionality instead"
            })
        }
    }

    rtd(position){
        let promise;
        let query = {}
        if(this.props.data.search){
            promise = yelpService.search(this.props.data.search)
        } else {
            query = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                term: "restaurant",
                radius: 8046,
                limit: 50,
                open_now: true,
                price: 1
            }
            promise = yelpService.search(query)
        }
        promise
            .then(response => {
                let shuffle = shuffleResults(response.businesses)
                let three = shuffle.slice(0,3)
                this.setState({
                    results: three,
                    loaded: true
                })
            })
            .catch(console.log)
    }

    reroll(){
        if(this.props.data.search){
            this.rtd()
        } else {
            this.getGeoLocation();
        }
    }

    render(){
        const headerText = {
            // fontFamily: "Varela Round",
            fontWeight: "700",
            fontSize: "2.5rem",
            lineHeight: "2.5rem"
        }

        return (
            <React.Fragment>
                <div className="row" style={{pointerEvents: "none"}}>
                    <div className="container mb-2">
                        <h1 className="text-center" style={headerText}>Roll The Dice</h1>
                    </div>
                </div>
                <div className="container">
                    <CardColumns>
                        {this.state.results[0] && this.state.results.map(item => {
                            return (
                                <CSSTransition 
                                    key={item.id} 
                                    in={true}
                                    appear={true}
                                    timeout={1000}
                                    classNames="fade-card"
                                >
                                    <React.Fragment>
                                        <YelpCard result={item} />
                                    </React.Fragment>
                                </CSSTransition>
                            )
                        })}
                    </CardColumns>
                    {/* <Collapse className="row" isOpen={this.state.collapse}>
                        <ListGroup>
                            {this.state.collapse && this.state.waitList.map(item => {
                                return (
                                    <ListGroupItem>{item}</ListGroupItem>
                                )
                            })
                            }
                        </ListGroup>
                    </Collapse> */}
                    {this.state.loaded ? <button type="button" className="btn btn-secondary btn-block mx-auto" onClick={e => {this.reroll()}}>Reroll</button> : null}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    data: state.search
})

export default connect(mapStateToProps)(RollTheDice)