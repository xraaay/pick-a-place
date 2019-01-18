import React from 'react';
import { connect } from 'react-redux'

class ActiveSearch extends React.Component {
    render(){
        const setting = this.props.data.search
        let location;
        if(setting){
            if(setting.currentLocation){
                location = "Current Location"
            } else {
                location = setting.location;
            }
        }
        let render = this.props.data.search ? (
            <div className="container-fluid">
                <div className="row">

                    <p className="col-sm-2 offset-md-1">Term: {setting.term}</p>
                    {/* <p>{location}</p> */}
                    <p className="col-sm-2">Location: {location}</p>
                    <p className="col-sm-2">Open Now: {setting.openNow.toString()}</p>
                    <p className="col-sm-2">Price: {setting.price}</p>
                    <p className="col-sm-2">Radius: {Math.round(setting.radius / 1609) + " miles"}</p>
                </div>
            </div>
        ) : (
            <div></div>
        )
        return (
            <React.Fragment>
                {render}
            </React.Fragment>
        )
    }
}

const mapsStateToProps = state => ({
    data: state.search
})

export default connect(mapsStateToProps)(ActiveSearch)