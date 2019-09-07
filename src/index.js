import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from "./components/home";
import Description from "./components/movieDescription";
import Booking from "./components/Booking";

import {BrowserRouter, Route} from "react-router-dom"
import SignUp from "./components/common/signup"
const app=(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/description/:id" component={Description} />
            <Route exact path="/booking" component={Booking} />
         
            <Route exact path="/signup" component={SignUp} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
