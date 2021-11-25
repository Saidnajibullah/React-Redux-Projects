import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css'
import google_developers from '../apis/google_developers';
import Loader from './Loader';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { videos: null, showLoader: 'none', selectedVideo: null}
    }
    //we get aip key from console.developers.google.com
    getSearchTerm = term => {
        this.getYoutubeVideos(term)
    }
    getYoutubeVideos = async searchTerm =>{
        this.setState({ showLoader: 'block' });
        const response = await google_developers.get('/search', {params: {q: searchTerm}});
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });
        this.setState({ showLoader: 'none' });
        console.log(this.state.videos)
        console.log(this.state.selectedVideo)
    }
    getSelectedVideo = video =>{
        this.setState({ selectedVideo: video})
    }
    componentDidMount(){
        this.getYoutubeVideos('animals')
    }
    render(){
        return(
            <div>
                <Loader showLoader={this.state.showLoader} />
                <div className='container'>
                    <SearchBar passSearchTermToAppComponent={this.getSearchTerm} />
                    <div className='main-content'>
                        <VideoDetail video={this.state.selectedVideo} />
                        <VideoList passSelectedVideoToApp={this.getSelectedVideo} videos={this.state.videos} />
                    </div>
                </div>
            </div>
        ) 
    }
}

export default App;