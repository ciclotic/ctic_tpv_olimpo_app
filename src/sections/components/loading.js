import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';

function Loading(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo-ciclotic.png')}
        style={styles.logo}
      />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 33,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Loading;
