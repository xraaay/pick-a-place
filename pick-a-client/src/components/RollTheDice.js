import React from 'react';
import * as yelpService from '../services/yelpService'
import * as settingsService from '../services/settingsService'
import { CardColumns } from 'reactstrap'
import { shuffleResults } from '../services/resuseableFunctions'
import YelpCard from './YelpCard';
import { CSSTransition } from 'react-transition-group'

class RollTheDice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            results: []
        }
        this.rtd = this.rtd.bind(this)
    }

    componentDidMount(){
        if(this.props.match.params.id){
            this.rtd()
        } else {
            this.getGeoLocation();
        }
    }

    getGeoLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.rtd)
        } else {
            alert("GeoLocation not available")
        }
    }

    rtd(position){
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
                                    <YelpCard result={item} />
                                </CSSTransition>
                            )
                        })}
                    </CardColumns>
                </div>
            </React.Fragment>
        )
    }
}

export default RollTheDice