import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SignInFormContainer from './signin_form_container';
import SignUpFormContainer from './signup_form_container';

class Modal extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        let component;

        if (!this.props.modal) {
            return null;
        }

        switch (this.props.modal) {
            case 'signin':
                component = <SignInFormContainer />;
                break;
            case 'signup':
                component = <SignUpFormContainer />;
                break;
            default:
                component = null;
        }

        return ( 
            <div className="modal-background">
                <div className="modal-child">{component}</div>
            </div>
        );
    }
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