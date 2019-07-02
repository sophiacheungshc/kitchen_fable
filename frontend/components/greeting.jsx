import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);
    }

    handleToggle(){
        document.getElementById('dropdown-menu').classList.toggle('show');
    }

    render(){
        const links = () => (
            <nav className="signin-signup">
                <Link to="/signup">Sign up</Link> <Link to="/signin">Sign in</Link> 
            </nav>
        );
        const greet = () => (
            <hgroup className="header-group">
                <h2 className="header-name">Hi, {this.props.currentUser.username}</h2>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </hgroup>
        );       
        return this.props.currentUser ? greet() : links();
    }
}


export default Greeting;
