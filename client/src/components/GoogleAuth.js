import React from 'react';
import { connect } from 'react-redux';
import { updateIsSignedIn, setUserId } from '../actions'
class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '1026678176601-lb0qjaao54i0ns1o33j0qojr30ci1imd.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onLoginStatusChange(this.auth.isSignedIn.get())
                this.props.setUserId(this.auth.currentUser.get().getId())
                this.auth.isSignedIn.listen(this.onLoginStatusChange)
            })
        })
    }
    onSignInClicked = ()=>{
        this.auth.signIn();
    }
    onSignOutClicked = ()=>{
        this.auth.signOut();
    }
    onLoginStatusChange = isSignedIn =>{
        this.props.updateIsSignedIn(isSignedIn)
    }
    logInStatus = ()=>{
        if(!this.props.isSignedIn)
        return (
            <button className='ui red google button' onClick={this.onSignInClicked}>
                <i className='google icon'></i>Sign In
            </button>
        )
        else if(this.props.isSignedIn) 
        return (
            <button className='ui blue google button' onClick={this.onSignOutClicked}>
                <i className='google icon'></i>Sign Out
            </button>
        )
        else return null;
    }
    render(){
        return <div>{this.logInStatus()}</div>
    }
}
const matStateToProps = state =>{
    return {isSignedIn: state.isSignedIn}
}
export default connect(matStateToProps, {updateIsSignedIn, setUserId})(GoogleAuth)