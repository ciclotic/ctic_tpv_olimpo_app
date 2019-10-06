import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

import Loading from './src/sections/components/loading';
import AppLayout from './src/app';

import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import olimpo from './native-base-theme/variables/olimpo';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <StyleProvider style={getTheme(olimpo)}>
            <AppLayout />
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}
