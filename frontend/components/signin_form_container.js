import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions/session_actions';
import SignInForm from './signin_form';
import { openModal, closeModal } from '../actions/modal_actions';
import { clearErrors } from '../actions/errors_actions';

const mSP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign In',
        navLink: <Link to="/signup">Create an account</Link>,
        reservations: Object.values(state.entities.reservations),
        restaurants: state.entities.restaurants
    };
};

const mDP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSP, mDP)(SignInForm);