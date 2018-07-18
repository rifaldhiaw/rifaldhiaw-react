import {FETCH_SINGLE_POST, FETCH_POST_COMMENTS} from '../redux/types';

const initialState = {
  post: {},
  comments: []
};

export const fetchSinglePost = postId => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(res => res.json())
    .then(post => dispatch({type: FETCH_SINGLE_POST, payload: post}));
};

export const fetchPostComments = postId => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
    .then(res => res.json())
    .then(comments => dispatch({type: FETCH_POST_COMMENTS, payload: comments}));
};

// reducer
export const postsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_POST:
      return {
        ...state,
        post: action.payload
      };
    case FETCH_POST_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
}
