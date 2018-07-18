import {FETCH_USER_POSTS, NEW_POST, DELETE_POST} from '../redux/types';

const initialState = {
  items: []
  // item: {}
};

export const fetchUserPosts = userId => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
    .then(res => res.json())
    .then(posts => dispatch({type: FETCH_USER_POSTS, payload: posts}));
};

export const createPost = postData => dispatch => {
  dispatch({type: NEW_POST, payload: postData});
  // Fake post on jsonplaceholder
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //     body: JSON.stringify(postData)
  //   })
  //   .then(res => res.json())
  //   .then(post => dispatch({type: NEW_POST, payload: post}));
};

export const deletePostAction = postId => dispatch => {
  dispatch({type: DELETE_POST, payload: postId})
};

// reducer
export const userPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case DELETE_POST:
      return {
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1)
        ] 
      };
    default:
      return state;
  }
}