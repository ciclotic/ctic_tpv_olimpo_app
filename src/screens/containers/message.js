import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MessageScreen extends Component {
  static navigationOptions = {
    title: 'Mensajes',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Message Screen</Text>
      </View>
    );
  }
}

export default MessageScreen;
