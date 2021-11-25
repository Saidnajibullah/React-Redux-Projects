import { setFormValues, validateFormField, createStream } from '../actions'
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
const StreamCreate = ({formValues, setFormValues, validateFormField, validationObj, createStream, userId})=>{
    return <StreamForm onSubmit={createStream} formValues={formValues} setFormValues={setFormValues}
    validateFormField={validateFormField} validationObj={validationObj} userId={userId} pageTitle='Create New Stream' />
}
const matStateToProps = state =>{
    return {
        formValues: state.formValues,
        validationObj: state.validationObj,
        userId: state.userId
    }
}
export default connect(matStateToProps, {setFormValues, validateFormField, createStream})(StreamCreate);