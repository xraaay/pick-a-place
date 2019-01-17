import React from 'react';
import { connect } from 'react-redux'

class ActiveSearch extends React.Component {
    render(){
        const setting = this.props.data.search
        let render = this.props.data.search ? 
        (
            <div className="container-fluid">
                <p>Term: {setting.term}</p>
                {/* <p>{location}</p> */}
                <p>Location: {setting.location}</p>
                <p>Open Now: {setting.openNow}</p>
                <p>Price: {setting.price}</p>
                <p>Radius: {setting.radius}</p>
            </div>
        ) 
        : 
        (
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