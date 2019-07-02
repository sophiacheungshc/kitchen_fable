import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SignInFormContainer from './signin_form_container';
import SignUpFormContainer from './signup_form_container';
import SearchContainer from './search_container';

const App = () => (
    <div>
        <header>
            <Link to="/" className="home-link">
                <h1>Kitchen Fable&#174;</h1>
            </Link>
            <GreetingContainer />
            
                <Route path="/signin" component={SignInFormContainer} />
                <Route path="/signup" component={SignUpFormContainer} />
                {/* <Route path="/" component={SearchContainer} /> */}
            
        </header>
        
    </div>
);

export default App;

