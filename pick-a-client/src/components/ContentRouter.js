import { BrowserRouter, Route, Link } from "react-router-dom";
import React from 'react'

class ContentRouter extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/other">Other</Link>
                            </li>
                            <li>
                                <Link to="/stuff">Stuff</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </BrowserRouter>
        )   
    }
}

export default ContentRouter