import React from 'react';
import Nav from './Nav'
import ContentRouter from './ContentRouter'

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Nav />
                <ContentRouter />
            </React.Fragment>
        )
    }
}

export default Layout