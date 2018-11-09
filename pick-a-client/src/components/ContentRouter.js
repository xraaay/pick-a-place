import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react'
import Settings from './Settings'

class ContentRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route path="/">Home</Route> */}
                    {/* <Route path="/other">Other</Route> */}
                    <Route path="/" component={Settings}>Stuff</Route>
                    <Route path="/register" component={Register}>Register</Route>
                </Switch>
            </BrowserRouter>
        )   
    }
}

export default ContentRouter