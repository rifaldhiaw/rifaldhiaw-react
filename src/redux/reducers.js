import { combineReducers } from 'redux';
// import postReducer from './postReducer';
import {userReducer} from '../users/userRedux';
import {userPostsReducer} from '../userPosts/userPostsRedux';
import {userAlbumsReducer} from '../userAlbums/userAlbumsRedux';
import {postsDetailReducer} from '../postDetail/postDetailRedux';
import {albumPhotosReducer} from '../albumPhotos/albumPhotosRedux';
import {photoDetailReducer} from '../photoDetail/photoDetailRedux';

export default combineReducers({
  // posts: postReducer,
  users: userReducer,
  userPosts: userPostsReducer,
  userAlbums: userAlbumsReducer,
  postDetail: postsDetailReducer,
  albumPhotos: albumPhotosReducer,
  photoDetail: photoDetailReducer
});
