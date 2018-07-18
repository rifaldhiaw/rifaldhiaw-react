import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPhotoDetail} from './photoDetailRedux';

class PhotoDetail extends Component {
  componentWillMount() {
    this
      .props
      .fetchPhotoDetail(parseInt(this.props.match.params.photoId, 10));
  }

  goBack = () => {
    this
      .props
      .history
      .goBack();
  }

  render() {
    return (
      <div>
        <div className="row bg-white p-2 m-2 shadow-sm">
          <div class="h4 text-info mx-3 pointer" onClick={this.goBack}>
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <small> Go Back </small>
          </div>
        </div>
        <div className="row m-2 align-items-center shadow-sm bg-white p-4">
          <div className="col-12">
            <img src={this.props.photoDetail.url} alt=""/>
          </div>
          <div className="col-12 mt-3">
              <h4>{this.props.photoDetail.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}

PhotoDetail.propTypes = {
  fetchPhotoDetail: PropTypes.func.isRequired,
  photoDetail: PropTypes.array.isRequired
};

const mapStateToProps = state => ({photoDetail: state.photoDetail.photo});

export default connect(mapStateToProps, {fetchPhotoDetail})(PhotoDetail);
