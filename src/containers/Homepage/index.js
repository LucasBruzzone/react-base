import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as appActions from '../../redux/actions/appActions';

import './index.scss';

const HomePage = ({ exampleAction, exampleData }) => (
  <div className="homepage">
    <h1>React boilerplate</h1>
    <button className="homepage__button" onClick={() => exampleAction()}>{exampleData}</button>
  </div>
);

HomePage.propTypes = {
  exampleAction: PropTypes.func.isRequired,
  exampleData: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  exampleData: state.appReducer.toJS().exampleData,
});

const mapDispatchToProps = (dispatch) => {
  const {
    exampleAction,
  } = bindActionCreators(appActions, dispatch);

  return {
    exampleAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
