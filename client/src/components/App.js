import React from 'react'
import { Switch, Route } from "react-router-dom"; 

import "../App.css"; 


import Dashboard from './Dashboard';

const App = () => {
    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}
export default App
