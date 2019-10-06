import React, {Component} from 'react';
import {Image} from 'react-native';

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('../../assets/logo-ciclotic.png')}
        style={{width: 220, height: 33}}
      />
    );
  }
}

export default LogoTitle;
