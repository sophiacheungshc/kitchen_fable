import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

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
            <>
            <div className="modal-close" onClick={this.props.closeModal}>&times;</div>
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
                        <input type="password" value={this.state.password2} onChange={this.update('password2')} placeholder='Re-enter password *'/>
                        <br />
                        <input type="text" value={this.state.location} onChange={this.update('location')} placeholder='Primary Dining Location *' />
                        <br />
                        <input type="submit" value={this.props.formType} />
                        <br />
                        <h3>Don't want to complete the form?</h3>
                        <button onClick={this.demo}>Demo Login</button>
                    </div>

                </form>
            </div>
            </>
        );
    }
}

export default withRouter(SignUpForm);
