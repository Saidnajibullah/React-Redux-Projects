import './VideoDetail.css'

const baseUrl = 'https://www.youtube.com/embed/';
const VideoDetail = ({video}) =>(
    <div className='video-detail'>
        {video !== null ? <iframe height='100%' src={baseUrl+video.id.videoId} /> : ''}
    </div>
)
export default VideoDetail;