import ReactDOM from "react-dom";
const Modal = ({action, hideModal, header, content, btn1Label, btn2Label}) =>{
    // as we know, normally react renders all the components hierarchy as a child of the #root
    //element of the html body element. sometimes we may want to bypass this rule and create
    //elments out of this hierarchy, createPortal method of ReactDOM is here for us.
    //Note: one of the reason for doing this is to prevent styling side effects.
    const confirm = ()=>{
        action();
        hideModal()
    }
    return(
        ReactDOM.createPortal(
            <div className='ui dimmer modals visible active' onClick={()=> hideModal()}>
                <div className='ui standard modal visible active' onClick={(e)=> e.stopPropagation()} style={{width: '400px', height: '200px'}}>
                    <div className='header'>{header}</div>
                    <div className="content">{content}</div>
                    <div className='actions'>
                        <div className="ui button primary" onClick={()=> hideModal()} >{btn1Label}</div>
                        <div className="ui button red" onClick={()=> confirm()} >{btn2Label}</div>
                    </div>
                </div>
            </div>
            , document.getElementById('modal'))
    )
} 
export default Modal;