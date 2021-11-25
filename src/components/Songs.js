import React from 'react';
import './Songs.css';
import { connect } from 'react-redux'
import { selectSong } from '../actions';
class Songs extends React.Component{
    listOfSongs = ()=>{
        return this.props.songs.map((song, i) => {
            return(
                    <div className='song' key={i}>
                        <div style={{paddingTop: '8px', fontWeight: 'bold'}}>{song.title}</div>
                        <div><button className="ui primary basic button" onClick={()=> this.props.selectSong(song)}>Primary</button></div>
                    </div>
                )
        });
    }
    render(){
        return(
            <div className='songs-list'>{this.listOfSongs()}</div>
        )
    }
}
const mapStateToProps = state =>{
    return {songs: state.songs}
}
export default connect(mapStateToProps, {selectSong})(Songs);
