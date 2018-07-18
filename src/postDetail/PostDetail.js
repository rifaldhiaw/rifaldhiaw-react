import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchSinglePost, fetchPostComments} from './postDetailRedux';

class PostDetail extends Component {
  componentWillMount() {
    this
      .props
      .fetchSinglePost(parseInt(this.props.match.params.postId, 10));
    this
      .props
      .fetchPostComments(parseInt(this.props.match.params.postId, 10));
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const postCommentsDiv = this
      .props
      .postComments
      .map(comment => (
        <div className="row m-2 align-items-center shadow-sm" key={comment.id}>
          <div className="col bg-white text-left">
            <div className="comment-title my-2">
              <p className="font-weight-bold m-0">{comment.name}</p>
              <small>{comment.email}</small>
            </div>
            <hr/>
            <div className="comment-body">
              <p>{comment.body}</p>
            </div>
          </div>
        </div>
      ));
    return (
      <div>
        <div
          className="row m-2 align-items-center shadow-sm">
          <div className="col bg-white text-left">
            <div className="post-title my-4 font-weight-bold ">
              <h3>
                <span class="h1 text-info mx-3 pointer" onClick={this.goBack}>
                  <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                </span>
                {this.props.singlePost.title}
              </h3>
            </div>
            <hr/>
            <div className="post-body p-2">
              <p>{this.props.singlePost.body}</p>
            </div>
          </div>
        </div>
        <div className="my-5"></div>
        <div className="mx-md-5">
          {postCommentsDiv}
        </div>
      </div>
    );
  }
}

PostDetail.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  singlePost: PropTypes.object.isRequired,
  postComments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({singlePost: state.postDetail.post, postComments: state.postDetail.comments});

export default connect(mapStateToProps, {fetchSinglePost, fetchPostComments})(PostDetail);