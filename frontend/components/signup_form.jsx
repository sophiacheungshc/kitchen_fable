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
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderErrors() {
        return (
            <ul class="signup-errors">
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
                    Welcome to KitchenFable!
                    <br />
                    {this.renderErrors()}
                    <div className="signup-form">
                        <input type="text" value={this.state.fname} onChange={this.update('fname')} />
                        <br />
                        <input type="text" value={this.state.lname} onChange={this.update('lname')} />
                        <br />
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                        <br />
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                        <br />
                        <input type="text" value={this.state.location} onChange={this.update('location')} />
                        <br />
                        <input type="submit" value={this.props.formType} />
                        <br />
                        <h3>Don't want to complete the form?</h3>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUpForm);
