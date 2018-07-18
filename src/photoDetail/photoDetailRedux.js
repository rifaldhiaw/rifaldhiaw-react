import { FETCH_SINGLE_PHOTO } from '../redux/types';

const initialState = {
  photo: {}
};

export const fetchPhotoDetail = photoId => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/photos/'+photoId)
    .then(res => res.json())
    .then(photo =>
      dispatch({
        type: FETCH_SINGLE_PHOTO,
        payload: photo
      })
    );
};

// reducer
export const photoDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PHOTO:
      return {
        ...state,
        photo: action.payload
      };
    default:
      return state;
  }
}
