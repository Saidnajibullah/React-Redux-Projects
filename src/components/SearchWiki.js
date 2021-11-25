import React, { useState, useEffect } from "react";
import axios from 'axios';
const SearchWiki = ()=>{
    const [term, setTerm] = useState('computer sience');
    const [finalTerm, setFinalTerm] = useState(term);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        const id = setTimeout(() =>{
            setFinalTerm(term)
        }, 1000);
        return () => clearTimeout(id)
    }, [term])
    useEffect(()=>{
       if(finalTerm !== ''){
        const search = async () =>{
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                 params: {
                     action: 'query',
                     list: 'search',
                     origin: '*',
                     format: 'json',
                     srsearch: finalTerm
                 }
             })
             setSearchResult(data.query.search);
         }
         search();
       }
    }, [finalTerm])
    const listOfResults = searchResult.map( (result, index) =>{
        return(
            <div className="ui list" key={index}>
                <div className="item">
                    <div className="content">
                        <div className="header">{result.title}</div>
                        <div className="description">{result.snippet.replaceAll(/<.*>/gi, '')}</div>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <React.Fragment>
            <div className="ui search" style={{width: '80%', textAlign:'center', marginBottom: '25PX'}}>
                <input className="prompt" type="text" value={term} onChange={ e => setTerm(e.target.value)}
                placeholder="Search something" 
                style={{width: '80%'}} />
            </div>
            <div>{listOfResults}</div>
        </React.Fragment>
    )
}
export default SearchWiki;