import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Modal from './modal';
import GreetingContainer from './greeting_container';
import SignInFormContainer from './signin_form_container';
import SignUpFormContainer from './signup_form_container';
import SearchContainer from './search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Carousel from './carousel';

const App = () => (
    <div className="main-body">
        <Modal />
        <header>
            <GreetingContainer />
            <Switch>
                {/* <AuthRoute exact path="/signin" component={SignInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
            </Switch>
        </header>
        <div className="main-div">
            <Route exact path="/" component={Carousel} />
        </div>
        <footer>
                <h5>Join us on</h5>
                <div className="external-links">
                <a href="https://github.com/sophiacheungshc/kitchen_fable"><span id="github"></span></a>
                <a href="https://github.com/sophiacheungshc/kitchen_fable"><span id="linkedin"></span></a>
                </div>
        </footer>
    </div>
);

export default App;

