import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchUsers} from './userRedux';
import { Link } from 'react-router-dom'

class Users extends Component {
  componentWillMount() {
    this
      .props
      .fetchUsers();
  }

  render() {
    const userList = this
      .props
      .users
      .map(user => (
        <div className="col-md-4" key={user.id}>
          <div className="row shadow-sm bg-white rounded p-3 m-1">
            <div className="col-md-8">
              <h5>{user.name}</h5>
              <p className="m-0">{user.username}</p>
              <p className="m-0">{user.email}</p>
            </div>
            <div className="col-md-4">
              <Link to={`/user/${user.id}/posts`}>
                <button className="btn btn-sm btn-info my-2">posts</button>
              </Link>
              <Link to={`/user/${user.id}/albums`}>
                <button className="btn btn-sm btn-info my-2">albums</button>
              </Link>
            </div>
          </div>
        </div>
      ));
    return (
      <div>
        <div className="row justify-content-center">
          {userList}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({users: state.users.items});

export default connect(mapStateToProps, {fetchUsers})(Users);
