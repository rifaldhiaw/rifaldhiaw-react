import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchAlbumPhotos} from './albumPhotosRedux';
import {Link} from 'react-router-dom';

class UserAlbums extends Component {
  componentWillMount() {
    this
      .props
      .fetchAlbumPhotos(parseInt(this.props.match.params.albumId, 10));
  }

  goBack = () => {
    this
      .props
      .history
      .goBack();
  }

  render() {
    const albumPhotosDiv = this
      .props
      .albumPhotos
      .map(photo => (
        <div className="col-md-auto my-2" key={photo.id}>
          <div className="row shadow-sm rounded bg-white my-2 mx-2">
            <div className="col bg-white rounded text-white font-weight-bold ">
              <img src={photo.thumbnailUrl} alt=""/>
              <Link to={`/photos/${photo.id}`}>
                <p className="my-2 ml-3 photo-title">{photo.title}</p>
              </Link>
            </div>
          </div>
        </div>
      ));
    return (
      <div>
        <div className="row bg-white p-2 m-2 shadow-sm">
          <div class="h4 text-info mx-3 pointer" onClick={this.goBack}>
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <small> Go Back </small>
          </div>
        </div>
        <div class="row justify-content-center">
          {albumPhotosDiv}
        </div>
      </div>
    );
  }
}

UserAlbums.propTypes = {
  fetchAlbumPhotos: PropTypes.func.isRequired,
  albumPhotos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({albumPhotos: state.albumPhotos.photos});

export default connect(mapStateToProps, {fetchAlbumPhotos})(UserAlbums);
