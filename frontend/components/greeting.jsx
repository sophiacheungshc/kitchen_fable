import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userMenu: false,
        }

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }
    
    showDropdownMenu(e) {
        e.preventDefault();
        this.setState({ userMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ userMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    handleUserToggle(){
        this.setState({ userMenu: !this.state.userMenu});
    }

    render(){
        const links = () => (
            <span className="nav-right">
                <button id="sign-up" onClick={() => this.props.openModal('signup')}>Sign up</button>
                <button id="sign-in" onClick={() => this.props.openModal('signin')}>Sign in</button>
            </span>
        );
        const greet = () => (
            <span className="nav-right">
                <div className="container">
                    <span className="user-toggle" onClick={this.showDropdownMenu}>
                        <h2 id="greeting">Hi, {this.props.currentUser.fname}</h2>
                        <span className="arrow-down"></span>
                    </span>
                    {this.state.userMenu && (
                        <div className="container">
                            <ul className="dropdown">
                                <li onClick={() => this.props.history.push('/user')}>My Profile</li>
                                {/* <li onClick={() => this.props.history.push('/user')}>My Dining History</li>
                                <li onClick={() => this.props.history.push('/user')}>My Saved Restaurants</li> */}
                                <li onClick={this.props.logout}>Sign Out</li>
                            </ul>
                        </div>
                    )}
                </div>
            </span>
        );    

        console.dir(this.props.currentUser)
        return (
            <div className="navbar">
                <span className="nav-left">
                    <Link to="/" className="home-link">
                        <span id="logo"></span>
                    </Link>
                    
                    {/* <span className="nav-location-dropdown"> 
                        <span id="pin"></span>
                        <span className="arrow-down"></span>
                    </span> */}
                    
                </span>
                {this.props.currentUser ? greet() : links()}
            </div>
        );
    }
}


export default withRouter(Greeting);
