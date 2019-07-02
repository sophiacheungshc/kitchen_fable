import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions/session_actions';
import Search from './search';

const mSP = (state) => {
    return {
        errors: state.errors.session
    };
};

const mDP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSP, mDP)(Search);