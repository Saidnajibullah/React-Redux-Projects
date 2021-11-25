import React from "react";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
import { fetchStream, editStream, setEditFormValues, validateFormField } from '../actions';
class StreamEdit extends React.Component{
    //when using react-router to render a component some useful props are automatically
    //being created which are very useful for passing data a long navigation.
    //console.log(this.props) to see the details.

    //when we render a component using react-router we should try to make the component stand alone in tearms of data.
    //because if it has data dependency on other components and we naviage directly to this component when loading the app
    //we get undefined for those data dependecies. For example, if type http://localhost:3000/edit/1 to the address bar
    //we get the streams us undefined, but if navigate to on clicking the Edit button we get the data. So, to recover, we
    //need to fetch data directly when navigating directly. That's what we do inside the componentDidMount.
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    render(){
        const {formValues, setEditFormValues, validateFormField, validationObj, editStream} = this.props;
        return <StreamForm onSubmit={editStream} formValues={formValues} setFormValues={setEditFormValues}
        validateFormField={validateFormField} validationObj={validationObj} pageTitle='Edit The Stream' />
    }
}

const mapStateToProps = (state, onwProps)=>{//the second parameter gives us a hook to the component props.
    return {
        formValues: state.editFormValues,
        validationObj: state.validationObj,
        userId: state.userId
    }
}
export default connect(mapStateToProps, {fetchStream, setEditFormValues, validateFormField, editStream})(StreamEdit);