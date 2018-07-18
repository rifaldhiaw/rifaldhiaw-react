import { FETCH_ALBUM_PHOTOS } from '../redux/types';

const initialState = {
  photos: []
};

export const fetchAlbumPhotos = albumId => dispatch => {
  console.log('userid = '+albumId);
  fetch('https://jsonplaceholder.typicode.com/albums/'+albumId+'/photos')
    .then(res => res.json())
    .then(photos =>
      dispatch({
        type: FETCH_ALBUM_PHOTOS,
        payload: photos
      })
    );
};

// reducer
export const albumPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_PHOTOS:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
}
