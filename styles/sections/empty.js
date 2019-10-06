import {colorApp} from '../app';
import {StyleSheet} from 'react-native';

const styleEmpty = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colorApp.text.text,
  },
});

export {styleEmpty};
