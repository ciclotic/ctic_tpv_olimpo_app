import {colorApp} from '../app';

const styleScreen = {
  container: {
    flex: 1,
    backgroundColor: colorApp.text.background,
  },
  headerStyle: {
    backgroundColor: colorApp.primary,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  iconStyle: {
    fontWeight: 'bold',
    color: colorApp.main,
  },
};

const colorScreen = {
  headerTintColor: colorApp.main,
};

export {styleScreen, colorScreen};
