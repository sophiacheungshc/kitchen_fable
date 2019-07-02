import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions/session_actions';
import SignInForm from './signin_form';

const mSP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign In',
        navLink: <Link to="/signup">Create an account</Link>
    };
};

const mDP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSP, mDP)(SignInForm);