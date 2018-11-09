import { Route, Switch } from "react-router-dom";
import React from 'react'
// import Settings from '../components/Settings'
import Register from '../components/Register'
import Homepage from './Homepage'
import Login from "../components/Login";

class ContentRouter extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Switch>
                    {/* <Route path="/">Home</Route> */}
                    {/* <Route path="/other">Other</Route> */}
                    <Route path="/" exact component={Homepage}>Stuff</Route>
                    <Route path="/register" component={Register}>Register</Route>
                    <Route path="/login" component={Login}>Login</Route>
                </Switch>
            </React.Fragment>
        )   
    }
}

export default ContentRouter