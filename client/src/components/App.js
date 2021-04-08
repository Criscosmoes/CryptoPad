import React from 'react'
import { Switch, Route } from "react-router-dom"; 

import "../App.css"; 


import Dashboard from './Dashboard';
import Landing from './Landing';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={Landing} />
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default App
