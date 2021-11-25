import { combineReducers } from "redux";
import _ from 'lodash';
import {
    UPDATE_SIGN_IN_OUT_STATUS,
    SET_USER_ID,
    SET_FORM_VALUE,
    VALIDATE_FORM_FIELD,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    SET_EDIT_FORM_VALUE,
    SHOW_MODAL
} from '../type-constants'
const INITIAL_FORM_VALUES = {title: '', description: ''}
const INITIAL_VALIDATION = {title: null, description: null}
// const googleAuthReducer = (auth = null, action) =>{
//     if(action.type === 'LOAD_GOOGLE_AUTH'){
//         return auth = action.payload;
//     } 
//     else return auth;
// }
const signInAndSignOutReducer = (isSignedIn = false, action)=>{
    if(action.type === UPDATE_SIGN_IN_OUT_STATUS) return action.payload;
    else return isSignedIn;
} 
const userIdReducer = (userId = null, action)=> {
    if(action.type === SET_USER_ID) return action.payload;
    else return userId;
}
const formValuesReducer = (values = INITIAL_FORM_VALUES, action)=> {
    const payload = action.payload;
    if(action.type === SET_FORM_VALUE) return {...values, ...payload }
    else return values;
}
const editFormValuesReducer = (values = INITIAL_FORM_VALUES, action)=> {
    const payload = action.payload;
    if(action.type === SET_EDIT_FORM_VALUE) return {...values, ...payload }
    else return values;
}
const formSubmitReducer = (success = null, action)=>{
    if(action.type === CREATE_STREAM) return action.payload;
    else return success;
}
const formFieldValidationReducer = (validationObject = INITIAL_VALIDATION, action)=>{
    const payload = action.payload;
    if(action.type === VALIDATE_FORM_FIELD) return {...validationObject, ...payload};
    else return validationObject;
}
const streamReducer = (streams = {}, action)=>{
    switch(action.type){
        case CREATE_STREAM: 
        case FETCH_STREAM: 
        case EDIT_STREAM: return {...streams, [action.payload.id]: action.payload};
        case DELETE_STREAM: return _.omit(streams, action.payload);


        //takes an array objects and returns an object of objects where the key of each
        // record object is the value of the 'id' property of that record object.
        case FETCH_STREAMS: return {...streams, ..._.mapKeys(action.payload, 'id')}; 
        default: return streams;
    }
}
const showModalReducer = (showModal = {show: false}, action)=>{
    if(action.type === SHOW_MODAL) return {...showModal, show: action.payload};
    else return showModal;
}
export default combineReducers({
    // auth: googleAuthReducer,
    isSignedIn: signInAndSignOutReducer,
    userId: userIdReducer,
    formValues: formValuesReducer,
    editFormValues: editFormValuesReducer,
    formSubmitSuccess: formSubmitReducer,
    validationObj :formFieldValidationReducer,
    streams: streamReducer,
    showModal: showModalReducer
})
