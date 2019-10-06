import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AddScreen extends Component {
  static navigationOptions = {
    title: 'Publicar',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Add Screen</Text>
      </View>
    );
  }
}

export default AddScreen;
