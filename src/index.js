import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Exercise2 } from './exercise2';
import { Exercise3 } from './exercise3';
import { Step1 } from './step1';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/app" exact component={App} />
            <Route path="/exercise2" component={Exercise2} />
            <Route path="/exercise3" component={Exercise3} />
            <Route path="/step1" component={Step1} />
        </Switch>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
