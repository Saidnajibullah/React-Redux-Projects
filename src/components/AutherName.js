import React from 'react';
import { connect } from 'react-redux';
//import { fetchUser } from '../actions';
class AuthorName extends React.Component{
    // componentDidMount(){
    //     this.props.fetchUser(this.props.userId);
    // }
    render(){
        if(!this.props.user) return null;
        else
        return <div>Author: {this.props.user.name}</div>
    }
}
const matStateToPropes = (state, props) =>{
    console.log(state)
    return {user: state.users.find(user => user.id === props.userId)}
}
export default connect(matStateToPropes)(AuthorName); 
// export default connect(matStateToPropes, {fetchUser})(AuthorName); 