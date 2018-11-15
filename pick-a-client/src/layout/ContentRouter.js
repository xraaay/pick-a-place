import { Route, Switch } from "react-router-dom";
import React from 'react'
// import Settings from '../components/Settings'
import Register from '../components/Register'
import Homepage from './Homepage'
import Login from "../components/Login";
import ViewSettings from "../components/ViewSettings";
import Search from '../components/SettingsForm';
import RollTheDice from "../components/RollTheDice";

class ContentRouter extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Switch>
                    {/* <Route path="/">Home */}
                    {/* <Route path="/other">Other */}
                    <Route path="/" exact component={Homepage} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/settings" component={ViewSettings} />
                    <Route path="/search" component={Search} />
                    <Route path="/rtd/:id?" component={RollTheDice} />
                </Switch>
            </React.Fragment>
        )   
    }
}

export default ContentRouter