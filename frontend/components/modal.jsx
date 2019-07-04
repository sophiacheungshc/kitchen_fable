import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SignInFormContainer from './signin_form_container';
import SignUpFormContainer from './signup_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'signin':
            component = <SignInFormContainer />;
            break;
        case 'signup':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background">
            <div className="modal-child">{component}</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);