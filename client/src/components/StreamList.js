import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { fetchStreams, deleteStream, showModal } from "../actions";
import StreamDelete from "./StreamDelete";
class StreamList extends React.Component{
    streamId = null;
    componentDidMount(){
        this.props.fetchStreams();
    } 
    showModal = streamId =>{
        this.props.showModal(true);
        return this.streamId = streamId;
    }
    renderEditDeleteButtons = stream => {
        if(stream.userId === this.props.userId){
            return(
                <div className="right floated content">
                    <Link to={`edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <div className="ui button red" onClick={()=> this.showModal(stream.id)}>Delete</div>
                </div>
            )
        }else return null;
    }
    renderCreateStreamButton = ()=>{
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign: 'right', marginTop: '10px'}}>
                    <Link className="ui button primary" to='/create'>Create Streams</Link>
                 </div>
            )
        }else return null;
    }
    renderStreams = ()=>{
        return this.props.streams.map(stream =>{
            return(
                <div className="item" key={stream.id}>
                    {this.renderEditDeleteButtons(stream)}
                    <i className='large middle aligned icon camera'></i>
                    <div className="content">
                        <Link to={`view/${stream.id}`} className='header'>{stream.title}</Link> 
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="ui celled list">
                <h2>List of Streams</h2>
                 {this.renderStreams()}   
                 {this.renderCreateStreamButton()}
                 {this.props.show === true ? <StreamDelete id={this.streamId} /> : null}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        isSignedIn: state.isSignedIn,
        streams: Object.values(state.streams),
        userId: state.userId,
        show: state.showModal.show
    }
}
export default connect(mapStateToProps, {fetchStreams, deleteStream, showModal})(StreamList);