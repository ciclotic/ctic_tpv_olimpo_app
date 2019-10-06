import React, {Component} from 'react';
import {View, Text} from 'react-native';

class FilterScreen extends Component {
  static navigationOptions = {
    title: 'Filtros',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Filter Screen</Text>
      </View>
    );
  }
}

export default FilterScreen;
