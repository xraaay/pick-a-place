import React from 'react';
import Nav from './Nav'
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import ActiveSearch from '../components/ActiveSearch'
import { connect } from 'react-redux'
import DiceRoll from '../components/DiceRoll';
import { CSSTransition } from 'react-transition-group'

class Layout extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading: true
        }
    }
    render(){
        return (
            <React.Fragment>
                {/* {this.props.loading ? 
                    <CSSTransition
                        // in={true}
                        // appear={true}
                        timeout={1000}
                        classNames="fade-card"
                    >
                        <DiceRoll /> 
                    </CSSTransition>
                : null} */}
                <React.Fragment>
                    <Nav />
                    <ContentRouter />
                </React.Fragment>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading
})

export default withRouter(connect(mapStateToProps)(Layout))