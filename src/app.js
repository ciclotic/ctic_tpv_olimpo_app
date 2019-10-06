import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createAppContainer} from 'react-navigation';
import {TabNavigator} from '../routes/tab';

import API from '../utils/api';

class AppLayout extends Component {
  /*async componentDidMount() {
    const postList = await API.getPosts();
    this.props.dispatch({
      type: 'SET_POST_LIST',
      payload: postList,
    });
  }*/
  async componentDidMount() {
    const emptyList = [];
    this.props.dispatch({
      type: 'SET_EMPTY_LIST',
      payload: emptyList,
    });
  }
  render() {
    return <AppContainer />;
  }
}

const AppContainer = createAppContainer(TabNavigator);

export default connect()(AppLayout);
