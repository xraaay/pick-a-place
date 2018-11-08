import React from 'react';
import { Jumbotron, Container } from 'reactstrap'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return (
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
        )
    }
}

export default Header