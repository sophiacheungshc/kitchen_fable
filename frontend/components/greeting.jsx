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
                <Link to="/signup"><button id="sign-up">Sign up</button></Link>
                <Link to="/signin"><button id="sign-in">Sign in</button></Link>
            </nav>
        );
        const greet = () => (
            <span className="nav-right">
                <h2 className="greeting">Hi, {this.props.currentUser.fname}</h2>
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            </span>
        );       
        return (
            <div className="navbar">
                <span className="nav-left">
                    <Link to="/" className="home-link">
                        <span id="logo"></span>
                    </Link>
                    
                    <span className="nav-location-dropdown"> 
                        <span id="pin"></span>
                        <span id="arrow"></span>
                    </span>
                    
                </span>
                {this.props.currentUser ? greet() : links()}
            </div>
        );
    }
}


export default Greeting;
