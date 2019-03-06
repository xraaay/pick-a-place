import React from 'react';
import Nav from './Nav'
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import ActiveSearch from '../components/ActiveSearch'
import { connect } from 'react-redux'
import DiceRoll from '../components/DiceRoll';

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                {!this.props.loading ? <DiceRoll /> : null}
                <Nav />
                <ContentRouter />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading
})

export default withRouter(connect(mapStateToProps)(Layout))