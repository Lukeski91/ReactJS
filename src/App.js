import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
            </Switch>
        );
    }
}

export default App;