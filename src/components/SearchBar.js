import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: 'animals'};
    }
    onSearchTermChange = (event) => {
        this.setState({term: event.target.value})
    }
    onFormSubmitted = (event) =>{
        event.preventDefault();
        this.props.passSearchTermToAppComponent(this.state.term);
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmitted}>
                <div className="ui search">
                    <div className="ui icon input" style={{width: '80%'}}>
                        <input className="prompt" onChange={this.onSearchTermChange} type="text" value={this.state.term} placeholder="Search for anything" />  
                        <i className="search icon"></i>
                    </div>
                </div>
            </form>
        )
    }
}
export default SearchBar;