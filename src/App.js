import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
    render() {
        return (

            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                 
                    <Switch>
                        <h1>hello world</h1>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
