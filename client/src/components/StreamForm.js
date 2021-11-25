import _ from 'lodash';
const StreamForm = ({formValues, setFormValues, validateFormField, validationObj, onSubmit, userId, pageTitle})=>{
    const validate = filedName =>{
        if(validationObj[filedName] === null) return null;
        else if(validationObj[filedName]) return null;
        else return <p style={{color: 'red'}}>{`${filedName} is required`}</p>
    }
    const isFormInvalid = ()=>{
        if(validationObj.description === null || validationObj.title === null) return true
        else return !(validationObj.description && validationObj.title);
    }
    return (
        <div style={{width: '500px'}}>
            <h3>{pageTitle}</h3>
            <hr /><br />
            <form className="ui form" onSubmit={(event)=> onFormSumbmitted(formValues, event, userId, onSubmit)}>
                <div className="field">
                    <label>Stream Title</label>
                    <input type="text" name="title" value={formValues.title} 
                    onChange={ e => setFormValues({title: e.target.value})} placeholder="Stream Title" 
                    onBlur={(e)=> validateFormField(e.target.name, e.target.value)} />
                    {validate('title')}
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" name="description" value={formValues.description} 
                    onChange={ e => setFormValues({description: e.target.value})} placeholder="Description" 
                    onBlur={(e)=> validateFormField(e.target.name, e.target.value)} />
                    {validate('description')}
                </div>
                <button className="ui button" type="submit" disabled={isFormInvalid()}>Submit</button>
            </form>
        </div>
    )
}

const onFormSumbmitted = (formValues, event, userId, onSubmit)=>{
    event.preventDefault();
    userId !== undefined ? onSubmit(formValues, userId):onSubmit(formValues.id, _.pick(formValues, 'title', 'description')) 
}
export default StreamForm;