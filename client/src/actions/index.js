import axiosconfig from "../apis/axiosconfig";
import history from "../history";
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
// export const loadGoogleAuth = () => async (dispatch, getState) => {
//     await window.gapi.load('client:auth2', ()=>{
//         window.gapi.client.init({
//             clientId: '1026678176601-lb0qjaao54i0ns1o33j0qojr30ci1imd.apps.googleusercontent.com',
//             scope: 'email'
//         }).then(()=>{
//             const auth = window.gapi.auth2.getAuthInstance();
//             dispatch({type: 'LOAD_GOOGLE_AUTH', payload: auth})
//         })
//     })
// }
export const updateIsSignedIn = isSignedIn =>{
    return{type: UPDATE_SIGN_IN_OUT_STATUS, payload: isSignedIn}
}
export const setUserId = userId =>{
    return { type: SET_USER_ID, payload: userId}
}
export const setFormValues = value =>{
    return { type: SET_FORM_VALUE, payload: value}
}
export const setEditFormValues = value =>{
    return { type: SET_EDIT_FORM_VALUE, payload: value}
}

// just created form exprimenting purposes
// export const submitForm = ()=> async (dispatch, getState) =>{
//     const formSubmitResult = await sleep(5000).then(()=> true);
//     console.log(formSubmitResult)
//     dispatch({ type: 'SUBMIT_FORM', payload: formSubmitResult})
// }
export const validateFormField = (fieldName, fieldValue) => {
    const isValid = /[\w+]/ig.test(fieldValue)
    return { type: VALIDATE_FORM_FIELD, payload: {[fieldName]: isValid}}
}
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const createStream = (formValues, userId ) => async dispatch =>{
    const response = await axiosconfig.post('/streams',{...formValues, userId: userId});
    dispatch({type: CREATE_STREAM, payload: response.data});
    history.push('/')
}
export const editStream = (id, formValues) => async dispatch =>{
    //there is a subtle difference between put and patch. the first one delete the previous recored and replace it with
    //the new one, while the second one only updates those properties that come as part of the request body. so, in our
    //case, since we don't send the id and userId properties as part of the request body, the patch method serves us better.

    // const response = await axiosconfig.put(`streams/${id}`, formValues);
    const response = await axiosconfig.patch(`streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data});
    history.push('/')
}
export const deleteStream = id => async dispatch =>{
    await axiosconfig.delete(`streams/${id}`)
    dispatch({ type: DELETE_STREAM, payload: id}) 
}
export const fetchStream = id => async dispatch =>{
    const response = await axiosconfig.get(`streams/${id}`)
    dispatch({ type: FETCH_STREAM, payload: response.data}) 
    dispatch({ type: SET_EDIT_FORM_VALUE, payload: response.data}) 
}
export const fetchStreams = () => async dispatch =>{
    const response = await axiosconfig.get('streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data}) 
}
export const showModal = flag => {
    return {type: SHOW_MODAL, payload: flag}
}