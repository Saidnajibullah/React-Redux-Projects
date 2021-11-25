import './VideoItem.css'
const VideoItem = ({video, passSelectedVideoToVideoList}) =>(
    <div className="video-item" onClick={() => passSelectedVideoToVideoList(video)}>
        <img width='100px' height='80px' className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
            <div className="header" style={{fontWeight: 'bold'}}>{video.snippet.channelTitle}</div>
            <div className="description">{video.snippet.title}</div>
        </div>
  </div>
)
export default VideoItem;