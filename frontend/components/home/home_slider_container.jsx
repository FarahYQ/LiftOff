import React from 'react';
import { connect } from 'react-redux';
import HomeSlider from './home_slider';
import { fetchFirstFive } from '../../actions/features_actions';

const mapStateToProps = state => {
  return {
    camps: state.entities.features.firstFive
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFirstFive: () => dispatch(fetchFirstFive())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlider);
