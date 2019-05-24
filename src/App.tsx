import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AppNavigator from './navigation';

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export default Root;
