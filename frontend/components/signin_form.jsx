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

    demo(e){
        e.preventDefault();
        this.props.processForm({ email: 'guest@welcome.com', password: 'demologin' }).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul className="signin-errors">
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
            <div className="sigin-form-container">
                <form onSubmit={this.handleSubmit} className="signin-form-box">
                    <h3>Please sign in</h3>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <div className="signin-form">
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email'/>
                        <br />
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                        <br />
                        <input type="submit" value={this.props.formType} />
                        <br />
                        <h3>Don't want to complete the form?</h3>
                        <button onClick={this.demo}>Demo Login</button>
                        <br />
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default withRouter(SignInForm);
