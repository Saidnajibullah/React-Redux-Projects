import jsonplaceholder from "../aips/jsonplaceholder";
import _ from 'lodash';


// ********************** VERSION 2 => alternative to memoization *******************
//this solution will not have the side effect that memoization had.
export const getPostsUsers = () => async (dispatch, getState ) => {
    const posts = await jsonplaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: posts.data});
    posts.data.map(post => post.userId) //alternatively we could get all fetched posts by getState().posts;
    .filter((id, index, self)=> self.indexOf(id) === index)
    .forEach(async userId => {
        const userResponse = await jsonplaceholder.get('/users/'+userId);
        dispatch({type: 'FETCH_USER', payload: userResponse.data});
    })
}

/* =====================================================

************* VERSION 1 => Using memoization ******************

    export const fetchPosts = () =>{
        //we cannot use asynch-await if don't have redux-thun middleware.
        return async function (dispatch, getState){
            const postsResponse = await jsonplaceholder.get('/posts');

            // good way to get distinct array elements.
            // .filter((userId, index, self) =>{
            //     return self.indexOf(userId) === index;
            // });
            dispatch({type: 'FETCH_POSTS', payload: postsResponse.data});
        }
    }
    Using memoizing sloves the problem of calling overloaded aip calls to get users. But, it has very
    subtle side effect: any changes to the user after first call will not be reflected.
    because it fetches a user with specific id only once in the whole life time of the applicaion.

    export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch); 
    const _fetchUser = _.memoize(async (userId, dispatch) =>{
        const userResponse = await jsonplaceholder.get('/users/'+userId);
        dispatch({type: 'FETCH_USER', payload: userResponse.data})
    });

*/

