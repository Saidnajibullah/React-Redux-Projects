import React, { useState, useEffect } from "react";
const Accordion = ({ data }) => {

    const [itemIndex, setItemIndex] = useState(null);
    const onTitleClick = index => setItemIndex(index);
    useEffect(()=>{
        //keep in mind that events registered with addEventListener allways occur first!!!
        //this might cause hard to debug bugs. For example, in the event babulling scenario, we expect that the events
        //occur in order, from child to parent. But that is not the case when addE... and onX... methods are mixed.
        document.body.addEventListener('click', (event)=>{
            if(event.target.localName === 'body')
            setItemIndex(null);
        })
    })
    const items = data.map( (item, i )=>{
        return(
            <React.Fragment key={i}>
                <div className={`title ${i === itemIndex ? 'active' : ''}`} onClick={()=> onTitleClick(i)}>
                    <i className='dropdown icon'></i>{item.title}
                </div>
                <div className={`content ${i === itemIndex ? 'active' : ''}`}>
                    <p className='transition visible' style={{display: 'block !important', marginLeft:'23px'}}>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });
    return <div className='ui styled accordion'>{items}</div>
}
export default Accordion;