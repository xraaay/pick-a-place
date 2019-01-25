import React from 'react';
import Nav from './Nav'
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import ActiveSearch from '../components/ActiveSearch'

class Layout extends React.Component{


    render(){
        return (
            <React.Fragment>
                <Nav />
                {/* {this.props.location.pathname === "/rtd" || "/wyr" ? <ActiveSearch /> : null} */}
                <ContentRouter />
            </React.Fragment>
        )
    }
}

export default withRouter(Layout)