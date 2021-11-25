import React, {useState, useEffect, useRef} from "react";
import './SearchDropdown.css';


// class SearchDropDown extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             showOptions: false,
//             opecity: 0.99,
//             inputValue: '',
//             options: [],
//             selectedOption: {name: 'Select option', value: null}
//         }
//     }
//     onOptionSelected = option =>{
//         this.setState({selectedOption: option, showOptions: false, inputValue: ''})
//     }
//     onDropdonwClick = (show)=>{
//         this.setState({showOptions: show});
//         if(show)
//         this.setState({options: this.props.options})
//     }
//     onInputFocused = ()=>{
//         this.setState({opecity: 0.5})
//         this.onDropdonwClick(true)
//     }
//     onInputFocusedOut = ()=>{
//         this.setState({opecity: 0.99})
//     }
//     onValueChange = (event)=>{
//         this.setState({opecity: 0, inputValue: event.target.value});
//         if(this.state.inputValue !== ''){
//             let options = this.props.options.filter(option => option.label.toLowerCase().startsWith(event.target.value.toLowerCase()));
//             this.setState({options: options})
//         }
//     }
//     componentDidMount(){
//         this.setState({options: this.props.options})
//     }
//     render(){
//         return(
//             <div className="ui fluid selection dropdown search-dropdown" style={{width: '80%', margin: '25px auto'}}>
//             <input type="hide" name="option" autoComplete="off" className='search' value={this.state.inputValue}
//             onFocus={()=> this.onInputFocused()} onChange={(e)=> this.onValueChange(e)} onBlur={()=> this.onInputFocusedOut()} />
//             <i className="dropdown icon" onClick={()=> this.setState({showOptions: !this.state.showOptions })}></i>
//             <div style={{opacity: this.state.opecity}}><i className={ this.state.selectedOption.value !== null ? `flag ${this.state.selectedOption.value}` : ''}></i>{this.state.selectedOption.label}</div>
//             <div className={`${this.state.showOptions ? 'show' : 'hide'}`}>
//                 {
//                     this.state.options.map((option, i) => <div key={i} className="item" onClick={()=> this.onOptionSelected(option)} ><i className={`flag ${option.value}`}></i>{option.label}</div>)
//                 }
//             </div>
//         </div>
//         )
//     }
// }
const SearchDropDown = ({options, defaultOption, hasIcon, passOptionToParent})=>{
    const [showOptions, setShowOptions] = useState(false);
    const [opecity, setOpecity] = useState(0.99);
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState({label: defaultOption, value: null});
    const [_options, setOptions] = useState(options);
    const eltRef = useRef();
    const onOptionSelected = option =>{
        setInputValue('');
        setShowOptions(false);
        setSelectedOption(option);
        if(passOptionToParent !== undefined)
        passOptionToParent(option);
    }
    const onDropdonwClick = (show)=>{
        setShowOptions(show);
        if(show)
        setOptions(options)
    }
    const onInputFocused = ()=>{
        setOpecity(0.5);
        onDropdonwClick(true)
    }
    const onInputFocusedOut = ()=>{
        setOpecity(0.99);
    }
    const onValueChange = (event)=>{
        setOpecity(0);
        setInputValue(event.target.value)
    }
    useEffect(()=>{
        const onBodyClicked = event =>{
            if(eltRef.current !== null){
                if(!eltRef.current.contains(event.target) && event.target.localName !== 'input' && event.target.localName !== 'i'){
                    setShowOptions(false);
                }
            }
        }
        document.body.addEventListener('click', onBodyClicked)
        return ()=>{
            document.body.removeEventListener('click', onBodyClicked);
        }
    }, [])
    useEffect(()=>{
        if(inputValue !== ''){
            let c = options.filter(option => option.label.toLowerCase().startsWith(inputValue.toLowerCase()));
            setOptions(c)
        }
    }, [inputValue, options])
    const listOfOptions = _options.map((option, i) => <div key={i} className="item" onClick={()=> onOptionSelected(option)} >{hasIcon ? <i className={`flag ${option.value}`}></i> : ''}{option.label}</div>)
    return(
        <div className="ui fluid selection dropdown search-dropdown" style={{width: '80%', margin: '25px auto'}}>
            <input type="hide" name="option" className='search' autoComplete="off" value={inputValue}
            onFocus={()=> onInputFocused()} onChange={(e)=> onValueChange(e)} onBlur={()=> onInputFocusedOut()} />
            <i className="dropdown icon" onClick={()=> { setShowOptions(!showOptions); setOptions(options)}}></i>
            <div style={{opacity: opecity}}>{hasIcon ? <i className={ selectedOption.value !== null ? `flag ${selectedOption.value}` : ''}></i> : ''}{selectedOption.label}</div>
            <div ref={eltRef} className={`${showOptions ? 'show' : 'hide'}`}>
                {listOfOptions}
            </div>
        </div>
    )
}

export default SearchDropDown;
