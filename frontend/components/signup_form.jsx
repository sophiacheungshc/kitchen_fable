import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            fname: '',
            lname: '',
            location: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal);
    }

    demo(e) {
        e.preventDefault();
        this.props.login({ email: 'guest@welcome.com', password: 'demologin' }).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="session-error">
                        {error}
                    </li>
                ))}
            </>
        );
    }

    render() {
        return (
            <>
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h3>Welcome to KitchenFable!</h3>
                    <hr className="session-hr"/>
                    {this.renderErrors()}
                    <div className="session-form">
                        <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder='First Name *'/>
        
                        <input type="text" value={this.state.lname} onChange={this.update('lname')} placeholder='Last Name *'/>
                        
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Enter email *'/>
                        
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Enter password *'/>
                        
                        <input type="password" value={this.state.password2} onChange={this.update('password2')} placeholder='Re-enter password *'/>
                        
                        <input type="text" value={this.state.location} onChange={this.update('location')} placeholder='Primary Dining Location *' />
                        
                        <input className="submit-btn" type="submit" value={this.props.formType} />
                    
                        <h5>Don't want to complete the form?</h5>
                        <button className="demo-btn" onClick={this.demo}>Demo Login</button>
                    </div>

                </form>
            </div>
            </>
        );
    }
}

export default withRouter(SignUpForm);
