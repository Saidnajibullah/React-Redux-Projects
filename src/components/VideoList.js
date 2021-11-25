import './VideoList.css';
import VideoItem from './VideoItem'
const VideoList = ({videos, passSelectedVideoToApp}) =>(
    <div className='video-list ui list' style={{margin: '0px'}}>
        {videos !== null ? videos.map( (video, i) => { 
            return <VideoItem key={i} passSelectedVideoToVideoList={passSelectedVideoToApp} video={video} /> 
        }) : ''}
    </div>
)
export default VideoList;