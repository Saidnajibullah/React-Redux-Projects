import { combineReducers } from 'redux'
const bestSongs = [
    {title: 'Peaches', duration: '4:45 sec'},
    {title: 'Calling My Phone', duration: '3:45 sec'},
    {title: 'Kiss Me More', duration: '3:15 sec'},
    {title: 'Lonely Nights', duration: '5:29 sec'},
];

const songsReducer = ()=> bestSongs;
const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SELECTED_SONG') 
    return action.payload
    else return selectedSong;
}
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})