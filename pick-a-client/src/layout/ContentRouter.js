import React from 'react'
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import Register from '../components/Register'
import Homepage from './Homepage'
import Login from "../components/Login";
import ViewSettings from "../components/ViewSettings";
import Search from '../components/SettingsForm';
import RollTheDice from "../components/RollTheDice";
import WouldYouRather from '../components/WouldYouRather'
// import { TransitionGroup, CSSTransition } from "react-transition-group"

class ContentRouter extends React.Component {
    render(){
        return (
            <React.Fragment>
                {/* <TransitionGroup className="transition-group"> */}
                    {/* <CSSTransition
                        key={this.props.location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames="fade"
                    >
                        <section className="route-section"> */}
                            <Switch>
                                {/* <Route path="/">Home */}
                                {/* <Route path="/other">Other */}
                                <Route path="/" exact component={Homepage} />
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                <Route path="/settings" component={ViewSettings} />
                                <Route path="/search/:id?" component={Search} />
                                <Route path="/rtd/:id?" component={RollTheDice} />
                                <Route path="/wyr/:id?" component={WouldYouRather} />
                            </Switch>
                        {/* </section>
                    </CSSTransition> */}
                {/* </TransitionGroup> */}
            </React.Fragment>
        )   
    }
}

export default withRouter(ContentRouter)