import React from 'react';
import { connect } from 'react-redux';
// import { fetchPosts } from '../actions';
import { getPostsUsers } from '../actions';
import AutherName from './AutherName';
//import jsonplaceholder from '../aips/jsonplaceholder';
class PostsList extends React.Component{
    componentDidMount(){
        this.props.getPostsUsers()

    //Solution if did not wanted to use redux-thank middleware
    //     (async ()=> {
    //         let response = await jsonplaceholder.get('/posts');
    //         this.props.fetchPosts(response.data)
    //     })()
    }
    render(){
        if(this.props.posts === undefined) return null;
        return this.props.posts.map(post =>{
            return(
                <div className="ui relaxed divided list" key={post.id}>
                    <div className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <h4 className="header">{post.title}</h4>
                            <div className="description">{post.body}</div>
                            <AutherName userId={post.userId} />
                        </div>
                    </div>
                </div>
            )
        })
    }
}
const matStateToProps = state =>{
    return {posts: state.posts}
}
export default connect(matStateToProps, {getPostsUsers})(PostsList);