import './SeasonDisplay.css';
import React from 'react';
function getSeason(month, lat){
    if(month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
    else return lat > 0 ? 'winter' : 'summer';
}
const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Have some hot drink!',
        iconName: 'snowflake'
    }
}
const SeasonDisplay = (props) =>{
    const season = getSeason(new Date().getMonth, props.lat);
    const {text, iconName} = seasonConfig[season];
    return (
    <div className='container'>
        <div className={`sub-container ${season}`}>
            <i className={`${iconName} icon massive`} />
            <h1 style={{alignSelf: 'center'}}>{text}</h1>
            <i className={`${iconName} icon massive`} style={{alignSelf: 'flex-end'}} />
        </div>
    </div>)
} 
export default SeasonDisplay;