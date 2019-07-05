import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../actions/session_actions';
import SignUpForm from './signup_form';
import { openModal, closeModal } from '../actions/modal_actions';
import { clearErrors } from '../actions/errors_actions';

const mSP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create Account'
    };
};

const mDP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSP, mDP)(SignUpForm);
