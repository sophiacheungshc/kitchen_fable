import React from 'react';
import { withRouter } from 'react-router-dom';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
            <ul class="signin-errors">
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
            <div className="sigin-form-container">
                <form onSubmit={this.handleSubmit} className="signin-form-box">
                    <h3>Please sign in</h3>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <div className="signin-form">
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        <br />
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                        <br />
                        <input type="submit" value={this.props.formType} />
                        <br />
                        <h3>Don't want to complete the form?</h3>
                        <br />
                        <label>New to KitchenFable? {this.props.navLink}</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignInForm);
