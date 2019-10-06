import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Buscador',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Search Screen</Text>
        <Button
          title="Go to Filter"
          onPress={() => this.props.navigation.navigate('Filter')}
        />
      </View>
    );
  }
}

export default SearchScreen;
