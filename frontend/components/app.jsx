import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Modal from './modal';
import GreetingContainer from './greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Carousel from './carousel';
import RestaurantIndex from './restaurant_index';

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
            <Switch>
                <Route exact path="/" component={Carousel} />
                <Route exact path="/restaurants" component={RestaurantIndex}/>
            </Switch>
        </div>
        <footer>
                <h5>Join us on</h5>
                <div className="external-links">
                <a href="https://github.com/sophiacheungshc/kitchen_fable" target="_blank"><span id="github"></span></a>
                <a href="https://github.com/sophiacheungshc/kitchen_fable" target="_blank"><span id="linkedin"></span></a>
                </div>
        </footer>
    </div>
);

export default App;

