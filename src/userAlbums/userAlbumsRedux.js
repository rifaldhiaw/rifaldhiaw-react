import { FETCH_USER_ALBUMS } from '../redux/types';

const initialState = {
  items: []
};

export const fetchUserAlbums = userId => dispatch => {
  console.log('userid = '+userId);
  fetch('https://jsonplaceholder.typicode.com/users/'+userId+'/albums')
    .then(res => res.json())
    .then(albums =>
      dispatch({
        type: FETCH_USER_ALBUMS,
        payload: albums
      })
    );
};

// reducer
export const userAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ALBUMS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
