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

    componentWillUnmount(){
        this.props.clearErrors;
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

    async demo(e) {
        e.preventDefault();

        const demoUser = {
            email: 'guest@welcome.com',
            password: 'demologin'
        };

        const sleep = ms => new Promise(res => setTimeout(res, ms));

        document.getElementById('user-email').focus();
        for (let i = 1; i <= demoUser.email.length; i++) {
            this.setState({ email: demoUser.email.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.getElementById('user-password').focus();
        for (let i = 1; i <= demoUser.password.length; i++) {
            this.setState({ password: demoUser.password.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.getElementById('submit-btn').click();
        document.getElementById('user-password').blur();
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
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h3>Please sign in</h3>
                    <hr className="session-hr"/>
                    {this.renderErrors()}
                    <div className="session-form">
                        <input id="user-email" type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email'/>

                        <input id="user-password" type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                        
                            <input id="submit-btn" className="submit-btn" type="submit" value={this.props.formType} />
                        
                        <hr className="session-hr" />
                        <h5>Don't want to complete the form?</h5>
                            <button className="demo-btn" onClick={this.demo}>Demo Login</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default withRouter(SignInForm);
