import React from 'react';
import * as settingsService from '../services/settingsService'
import * as yelpService from '../services/yelpService'
import { shuffleResults } from '../services/resuseableFunctions'
import YelpCard from './YelpCard';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import "./WouldYouRather.css"
import swal from 'sweetalert2'
import { Alert } from 'reactstrap'

class WouldYouRather extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: true,
            loaded: false,
            results: [],
            first: '',
            second: '',
            index: 1,
            maxResults: '',
            collapse: false,
            waitList: []
        }
        this.wyr = this.wyr.bind(this)
        this.select = this.select.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    componentDidMount(){
        if(this.props.data.search){
            this.wyr()
        } else {
            this.getGeoLocation(this.wyr)
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.data.search !== this.props.data.search){
            this.wyr()
        }
    }

    getGeoLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.wyr, function(){
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


    wyr(position){
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
                let businesses = response.businesses 
                if(businesses.length < 2){
                    swal({
                        type: "error",
                        title: "Not Enough Businesses Found"
                    })
                    } else {
                        let shuffle = shuffleResults(response.businesses)
                        let maxResults = response.businesses.length-1
                        let arrOne = [shuffle[0]]
                    let arrTwo = [shuffle[1]]
                    this.setState({
                        results: shuffle,
                        first: arrOne,
                        second: arrTwo,
                        maxResults: maxResults,
                        loaded: true
                    })
                }
            })
            .catch(console.log)
    }

    select(num){
        if(this.state.index <= 5){
            let { results } = this.state
            let index = this.state.index + 1
            if(this.state.maxResults > index){
                let newResult = [results[index]]
                switch(num){
                    case 1:
                        this.setState({
                            second: newResult,
                            index: index,
                        })
                        break;
                    case 2:
                        this.setState({
                            first: newResult,
                            index: index,
                        })
                        break;
                    default:
                        console.log("error")
                }
            }
        }
    }

    toggleCollapse = str => {
        if(this.state.waitList){
            yelpService.scrape(str)
                .then(response => {
                    this.setState({
                        collapse: true,
                        waitList: response.data,
                    })
                })
                .catch(console.error)
        } else {
            this.setState(prevState => {
                return {
                    collapse: !prevState.collapse
                }    
            })
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
                {this.state.showAlert ? <Alert isOpen={this.state.showAlert} /> : null}
                <div className="row">
                    <div className="container text-center">
                        {/* <h1 style={headerText}>Would You Rather</h1> */}
                        {this.state.loaded ? <h3>{this.state.index < 6 ? `Round ${this.state.index}!` : "Final!"}</h3> : null}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            {this.state.first && this.state.first.map(item => {
                                return (
                                    <React.Fragment key={item.id} >
                                        <CSSTransition 
                                            in={true}
                                            appear={true}
                                            timeout={800}
                                            classNames="fade-card"
                                        >
                                            <YelpCard result={item}/>
                                        </CSSTransition>
                                        <button type="button" className="btn btn-secondary btn-block mx-auto" onClick={e => {this.select(1)}} >Select</button>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <div className="col-sm-6">
                            {this.state.second && this.state.second.map(item => {
                                return (
                                    <React.Fragment key={item.id} >
                                        <CSSTransition 
                                            in={true}
                                            appear={true}
                                            timeout={800}
                                            classNames="fade-card"
                                        >
                                            <YelpCard result={item} />
                                        </CSSTransition>
                                        <button type="button" className="btn btn-secondary btn-block mx-auto" onClick={e => {this.select(2)}}>Select</button>
                                    </React.Fragment>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    data: state.search
})

export default connect(mapStateToProps)(WouldYouRather)