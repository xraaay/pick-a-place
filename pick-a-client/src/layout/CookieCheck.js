import React from 'react';
import { withCookies } from 'react-cookie'
import Layout from './Layout';
import { connect } from 'react-redux'
import { setUser } from '../actions'


class CookieCheck extends React.Component {
    componentDidMount(){
        let { cookies } = this.props
        let user = cookies.get('myCookie')
        if(user){
            this.props.setUser(user)
        }
    }

    render(){
        return (
            <React.Fragment>
                <Layout />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default withCookies(connect(null, mapDispatchToProps)(CookieCheck));