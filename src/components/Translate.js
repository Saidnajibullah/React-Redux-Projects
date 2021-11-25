import React, { useState, useEffect } from 'react';
import SearchDropDown from "./SearchDropDown";
import axios from 'axios';
const Translate = ({ options, defaultOption })=>{
    const [term, setTerm] = useState('');
    const [updatedterm, updateTerm] = useState(term);
    const [translatedTerm, setTranslatedTerm] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(defaultOption.value)
    const getOption = option =>{
        setSelectedLanguage(option.value)
    }
    useEffect(()=>{
        const id = setTimeout(() => {
            updateTerm(term);
        }, 1000);
        return ()=> clearTimeout(id)
    }, [term])
    //google translate aip key
    //AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
    useEffect(()=>{
        (async () =>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: updatedterm,
                    target: selectedLanguage,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            if(data !== undefined && data.data.translations !== undefined)
            setTranslatedTerm(data.data.translations[0].translatedText)
        })();
    }, [selectedLanguage, updatedterm])
    return(
        <React.Fragment>
            <div className="ui search" style={{width: '100%', textAlign:'center', marginTop: '25PX'}}>
                <input className="prompt" type="text" value={term} onChange={ e => setTerm(e.target.value)}
                placeholder="Enter text to translate" 
                style={{width: '80%'}} />
            </div>
            <SearchDropDown options={options} defaultOption={defaultOption.label} hasIcon={false} passOptionToParent={getOption} />
            {translatedTerm !== null && translatedTerm !== '' ? 
                <div style={{width: '80%', textAlign:'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '40px'}}>
                <h4 style={{borderBottom: '2px solid black'}}>Translation Result</h4>
                <h3 style={{textAlign: 'center'}}>{translatedTerm}</h3>
            </div>
            : null}
        </React.Fragment>
    )
}
export default Translate;