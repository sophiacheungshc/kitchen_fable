import { OPEN_MODAL, CLOSE_MODAL, CHANGE_MODAL } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { modal: action.modal, review: action.review };
        case CLOSE_MODAL:
            return null;
        case CHANGE_MODAL:
            return action.modal;
        default:
            return state;
    }
}

export default ModalReducer;