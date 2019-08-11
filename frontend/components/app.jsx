import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal';
import GreetingContainer from './greeting_container';
import { ProtectedRoute } from '../util/route_util';
import Home from './home';
import RestaurantIndexContainer from './restaurant_index_container';
import RestaurantContainer from './restaurant_container';
import UserContainer from './user_container';
import ReviewForm from './review_form';

const App = () => (
    <div className="main-body">
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        <div className="main-div">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/restaurants" component={RestaurantIndexContainer}/>
                <Route exact path="/restaurants/:restId" component={RestaurantContainer} />
                <ProtectedRoute exact path="/user" component={UserContainer} />
                <ProtectedRoute exact path="/review" component={ReviewForm} />
            </Switch>
        </div>
        <footer>
                <h5>Join me on</h5>
                <div className="external-links">
                <a href="https://github.com/sophiacheungshc/kitchen_fable" target="_blank"><span id="github"></span></a>
                <a href="https://github.com/sophiacheungshc/kitchen_fable" target="_blank"><span id="linkedin"></span></a>
                </div>
        </footer>
    </div>
);

export default App;

