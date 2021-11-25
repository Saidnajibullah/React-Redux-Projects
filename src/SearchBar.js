import React from 'react';
import './SearchBar.css';

/*
controlled vs uncontrolled components:
in controlled all the data is stored and manage with the state system.
in uncontrolled we rely on the native DOM.
*/

//uncontrolled
// class SearchBar extends React.Component{
//     onInputChange(event){
//         console.log(event.target.value)
//     }
//     render(){
//         return(
//             <div className="ui category search search-container">
//                 <div className="ui icon input">
//                     <input className="prompt" type="text" onChange={this.onInputChange} placeholder="Search anything..." />
//                     <i className="search icon"></i>
//                 </div>
//             </div>
//         );
//     }
// }

//controlled component
//it gives more control in manipulating data, such providing a default value to the input or uppercasing the input value and ....
class SearchBar extends React.Component{
    state = {term: 'animals'};
    onFormSubmitted = (event) => {
        if(event !== null)event.preventDefault();
        this.props.searchTerm(this.state.term)
    }
    componentDidMount(){
        this.onFormSubmitted(null);
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmitted}>
                <div className="ui category search search-container">
                    <div className="ui icon input">
                        <input className="prompt" type="text" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value.toLowerCase()})} 
                        placeholder="Search anything..." />
                        <i className="search icon pointer" onClick={this.onFormSubmitted} ></i>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;