import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from './userPostsRedux';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this
      .onChange
      .bind(this);
    this.onSubmit = this
      .onSubmit
      .bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      userId: this.props.userId,
      id: 100, //sorry about the hard code
      title: this.state.title,
      body: this.state.body
    };

    this
      .props
      .createPost(post);
  }

  render() {
    return (
      <div className="col">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-10">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Title:</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 col-form-label">Body:</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    name="body"
                    onChange={this.onChange}
                    value={this.state.body}/>
                </div>
              </div>
            </div>
            <div className="col-2">
              <button className="btn btn-info btn-sm" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(PostForm);
