import { combineReducers } from "redux";

/*
Reducers rules:
1) should return something, except undefined.
2) should be pure.
3) does not mutate state.
*/
const postsReducer = (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_POSTS': return action.payload;
        default: return posts;
    }
}
const userReducer = (users = [], action)=> {
    switch(action.type){
        case 'FETCH_USER': return [...users, action.payload];
        default: return users
    }
}
export default combineReducers({posts: postsReducer, users: userReducer});