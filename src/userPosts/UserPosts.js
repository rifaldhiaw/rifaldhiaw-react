import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchUserPosts, deletePostAction} from './userPostsRedux';
import {Link} from 'react-router-dom'
import AddPost from './AddPost';

class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: false,
      userId: parseInt(this.props.match.params.userId, 10)
    };

    this.toogleAddPost = this.toogleAddPost.bind(this);
  }

  componentWillMount() {
    this
      .props
      .fetchUserPosts(this.state.userId);
  }

  // Fake post on jsonplaceholder
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.userPosts.unshift(nextProps.newPost);
  //   }
  //   this.forceUpdate();
  // }

  toogleAddPost() {
    this.setState(prevState => ({
      addPost: !prevState.addPost
    }));
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const userPostsDiv = this
      .props
      .userPosts
      .map( (post, index) => (
        <div className="row m-2 align-items-center shadow-sm" key={post.id}>
          <div className="col bg-white text-left">
            <div className="row align-items-center">
              <div className="col">
                <Link to={`/post/${post.id}`}>
                  <h5 className="mt-3">{post.title}</h5>
                </Link>
              </div>
              <div className="col-auto">
                <span className="h5 mx-3 pointer" onClick={this.goBack}>
                  <i className="fa fa-pencil mx-3 text-warning" aria-hidden="true"></i>
                </span>
                <span className="h5 mx-3 pointer" onClick={() => {this.props.deletePostAction(index)}} >
                  <i className="fa fa-times mx-3 text-red " aria-hidden="true" ></i>
                </span>
              </div>
            </div>
            <hr/>
            <p className="m-2">{post.body}</p>
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
          <div className="col-md-auto">
            <div className="h4 text-red mx-3 pointer" onClick={this.toogleAddPost}>
              <i className="fa fa-plus-square mx-3" aria-hidden="true"></i>
              <small>
                Add Post
              </small>
            </div>
          </div>
        </div>
        {/* form add post */}
        { this.state.addPost?
        <div className="row bg-white mx-2 shadow rounded my-4 py-4">
          <AddPost userId={this.state.userId} />
        </div>
        :null}
        {/* post list */}
        {userPostsDiv}
      </div>
    );
  }
}

UserPosts.propTypes = {
  fetchUserPosts: PropTypes.func.isRequired,
  deletePostAction: PropTypes.func.isRequired,
  userPosts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  userPosts: state.userPosts.items,
  newPost: state.userPosts.item
});

export default connect(mapStateToProps, {fetchUserPosts, deletePostAction})(UserPosts);