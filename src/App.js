import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { Switch, Route } from 'react-router-dom'

// components
import Header from './common/Header';
import Users from './users/Users';
import UserPosts from './userPosts/UserPosts';
import UserAlbums from './userAlbums/UserAlbums';
import PostDetail from './postDetail/PostDetail';
import AlbumPhotos from './albumPhotos/AlbumPhotos';
import PhotoDetail from './photoDetail/PhotoDetail';

// store
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Header/>
          <div className="my-4"></div>
          <Switch>
            <Route exact path='/' component={Users}/>
            <Route exact path='/user/:userId/posts' component={UserPosts}/>
            <Route exact path='/user/:userId/albums' component={UserAlbums}/>
            <Route exact path='/post/:postId' component={PostDetail}/>
            <Route exact path='/albums/:albumId/photos' component={AlbumPhotos}/>
            <Route exact path='/photos/:photoId' component={PhotoDetail}/>
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
