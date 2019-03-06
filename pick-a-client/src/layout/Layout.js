import React from 'react';
import Nav from './Nav'
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import ActiveSearch from '../components/ActiveSearch'
import { connect } from 'react-redux'

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                {this.props.}
                <Nav />
                {/* {this.props.location.pathname === "/rtd" || "/wyr" ? <ActiveSearch /> : null} */}
                <ContentRouter />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading
})

export default withRouter(connect(mapStateToProps)(Layout))