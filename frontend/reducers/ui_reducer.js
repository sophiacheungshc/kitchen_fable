import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import LoadingReducer from './loading_reducer';

const UIReducer = combineReducers({
    modal: ModalReducer,
    loading: LoadingReducer
});

export default UIReducer;