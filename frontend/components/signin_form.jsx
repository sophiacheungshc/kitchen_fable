import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
        this.notify = this.notify.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    notify(){
        const { reservations, restaurants } = this.props;
        //if there are any reservations under the logged in user, go through them
        if (reservations.length) {
            reservations.forEach((res, idx) => {
                //date difference divided by number of millisecs = total number of days between 2 dates
                let dateDiff = Math.ceil(((new Date(res.date)) - (new Date())) / (1000 * 60 * 60 * 24));
                //only want to notify user about reservations that are 1-5 days away
                if (dateDiff >= 0 && dateDiff <= 5) {
                    switch (dateDiff) {
                        case 0:
                            dateDiff = 'today';
                            break;
                        case 1:
                            dateDiff = 'tomorrow';
                            break;
                        default:
                            dateDiff = `in ${dateDiff} days`;
                    }
                    toast(`Reminder: You have an upcoming reservation ${dateDiff} 
                        at ${restaurants[idx]}.`, { delay: 1000, className: 'toasty' });
                }
            })        
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { closeModal, processForm } = this.props;
        processForm(this.state)
            .then(closeModal)
            //check for notifications about upcoming reservations upon sign in
            .then(this.notify)
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
