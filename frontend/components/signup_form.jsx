import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            location: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demo(e) {
        e.preventDefault();
        this.props.processForm({ email: 'guest@welcome.com', password: 'demologin' });
    }

    renderErrors() {
        return (
            <ul className="signup-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h3>Welcome to KitchenFable!</h3>
                    <br />
                    {this.renderErrors()}
                    <div className="signup-form">
                        <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder='First Name *'/>
                        <br />
                        <input type="text" value={this.state.lname} onChange={this.update('lname')} placeholder='Last Name *'/>
                        <br />
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Enter email *'/>
                        <br />
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Enter password *'/>
                        <br />
                        <input type="text" value={this.state.location} onChange={this.update('location')} placeholder='Primary Dining Location *' />
                        <br />
                        <input type="submit" value={this.props.formType} />
                        <br />
                        <h3>Don't want to complete the form?</h3>
                        <button onClick={this.demo}>Demo Login</button>
                        <br />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUpForm);
