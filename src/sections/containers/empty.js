import React from 'react';
import {View, Text} from 'react-native';
import {styleEmpty} from '../../../styles/sections/empty';

function Empty(props) {
  return (
    <View style={styleEmpty.container}>
      <Text style={styleEmpty.text}>{props.text}</Text>
    </View>
  );
}

export default Empty;
