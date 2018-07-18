import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchUserAlbums} from './userAlbumsRedux';
import {Link} from 'react-router-dom';

class UserAlbums extends Component {
  componentWillMount() {
    this
      .props
      .fetchUserAlbums(parseInt(this.props.match.params.userId, 10));
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const userAlbumsDiv = this
      .props
      .userAlbums
      .map(album => (
        <div className="col-md-6" key={album.id}>
          <div className="row shadow-sm rounded bg-white my-2 mx-2">
            <div className="col-2 bg-info rounded text-white font-weight-bold ">
              <p className="m-2">{album.id}</p>
            </div>
            <div className="col-10 text-left">
              <Link to={`/albums/${album.id}/photos`}>
                <p className="my-2 ml-3 font-weight-bold">{album.title}</p>
              </Link>
            </div>
          </div>
        </div>
      ));
    return (
      <div>
      {/* infobar */}
      <div className="row bg-white p-2 m-2 shadow-sm justify-content-between">
        <div className="col-md-auto">
          <div className="h4 text-info pointer" onClick={this.goBack}>
            <i className="fa fa-arrow-circle-left mx-3" aria-hidden="true"></i>
            <small>
              Go Back
            </small>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        {userAlbumsDiv}
      </div>
      </div>
    );
  }
}

UserAlbums.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  userAlbums: PropTypes.array.isRequired
};

const mapStateToProps = state => ({userAlbums: state.userAlbums.items});

export default connect(mapStateToProps, {fetchUserAlbums})(UserAlbums);
