import React from 'react';
import { ListGroup, Collapse, ListGroupItem, Button } from 'reactstrap'
import * as yelpService from '../services/yelpService'

class WaitList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapse: false,
            waitList: [],
        }
    }

    toggleCollapse = str => {
        if(this.state.waitList){
            yelpService.scrape(str)
                .then(response => {
                    this.setState({
                        collapse: true,
                        waitList: response,
                    })
                })
                .catch(console.error)
        } else {
            this.setState(prevState => {
                return {
                    collapse: !prevState.collapse
                }    
            })
        }
    }


    render(){
        return (
            <React.Fragment>
                <Button block onClick={e => {this.toggleCollapse(this.props.alias)}}>View Wait List</Button>
                <Collapse className="row" isOpen={this.state.collapse}>
                    <ListGroup>
                        {this.state.collapse && this.state.waitList.map(item => {
                            return (
                                <ListGroupItem>{item}</ListGroupItem>
                            )
                        })
                        }
                    </ListGroup>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default WaitList