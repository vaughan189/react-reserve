import React, { useState } from 'react';
import { Switch, Route, Router, withRouter, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/Home';
import LoginPage from '../LoginPage/Login'
import { Navbar } from "../../components";
import { getUserDetails } from "../../utils";

const Index = ({ history }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    history.listen(() => {
        const userDetails = JSON.parse(getUserDetails());
        if (userDetails && userDetails.id) { setIsLoggedIn(true) } else { setIsLoggedIn(false) }
    });
    return (
        <Router history={history}>
            {isLoggedIn ? <Navbar /> : null}
            <Switch>
                <Route exact path="/" render={() => (!isLoggedIn ? (<LoginPage />) : (<Redirect to="/home" />))} />
                <Route exact path="/login" render={() => (!isLoggedIn ? (<LoginPage />) : (<Redirect to="/home" />))} />
                <Route exact path="/home" render={() => (isLoggedIn ? (<HomePage />) : (<Redirect to="/login" />))} />
            </Switch>
        </Router>
    )
}

export default withRouter(Index);