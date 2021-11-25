import ReactDOM from 'react-dom';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: ''};
    }
    //there are two ways to initialize state: 1)inside constructor 2)outside constructor as bellow
    //state = {lat: null, errorMessage: ''};
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        )
    }
    render(){
        return this.state.errorMessage !== '' ? <div>Error: {this.state.errorMessage}</div> 
        : this.state.lat != null ? <SeasonDisplay lat={this.state.lat} /> 
        : <div className='spinner'><i class="spinner loading icon massive"></i></div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'))