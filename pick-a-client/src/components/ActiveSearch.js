import React from 'react';
import { connect } from 'react-redux'

class ActiveSearch extends React.Component {
    componentDidMount(){

    }

    render(){
        const setting = this.props.data.search
        let location;
        if(setting.currentLocation){
            location = setting.currentLocation
        } else {
            location = setting.location
        }
        return (
            <div className="container-fluid">
                <p>{setting.term}</p>
                <p>{setting.currentLocation}</p>
                <p>{setting.location}</p>
                <p>{setting.openNow}</p>
                <p>{setting.price}</p>
                <p>{setting.radius}</p>
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    data: state.search
})

export default connect(mapsStateToProps)(ActiveSearch)