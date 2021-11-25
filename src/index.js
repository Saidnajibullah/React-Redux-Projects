import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ImagesGird from './ImagesGrid';
import unsplash from './api/unsplash';

class App extends React.Component{
    state = { loader: 'none', images: null }
    onFormSubmitted = term =>{
        this.setState({loader: 'block'})
        unsplash.get('/search/photos', {params: { query: term, per_page: 50 }})
        .then( response =>{
            this.setState({ loader: 'none', images: response});
        }).catch( error =>{
            this.setState({ loader: 'none', images: null })
        })
    }

    //Alternative way of fetching data: using async-awit syntax
    // onFormSubmitted = async term =>{
    //     this.setState({loader: 'block'})
    //     const response = await axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term, per_page: 50},
    //         headers: {
    //             Authorization: 'Client-ID z2VWFtdxyG_toRMQwgHDtFuMufoEC1iN7WbIoLoRm-8'
    //         }
    //     });
    //     this.setState({ loader: 'none', images: response});
    // }
    render(){
        return (
         <div>
             <Loader showLoader={this.state.loader} />
             <SearchBar searchTerm={this.onFormSubmitted} />
             <ImagesGird images={this.state.images} />
        </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))