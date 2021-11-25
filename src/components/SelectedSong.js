import { connect } from 'react-redux';
import './SelectedSong.css';
const SelectedSong = ({song}) =>{
    if(song === null)
    return <div className='selected-song-container'>Select a song</div>;
    else return(
        <div className='selected-song-container'>
            <div>Song title: {song.title}</div>
            <div>Song duration: {song.duration}</div>
        </div>
    ) 
}
const mapStateToProps = state =>{
    return {song: state.selectedSong}
}
export default connect(mapStateToProps)(SelectedSong);