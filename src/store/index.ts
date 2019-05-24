import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
// @ts-ignore
import immutableTransform from 'redux-persist-transform-immutable';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'discogs-artists-app',
  storage: AsyncStorage,
  whitelist: ['likes'],
};

const sagaMiddleware = createSagaMiddleware();

const persisterReducer = persistReducer(persistConfig, rootReducer);
const middlewares = applyMiddleware(sagaMiddleware);

export const store = createStore(
  persisterReducer,
  composeWithDevTools(middlewares),
);

const sagas = [rootSaga];
sagas.forEach(sagaMiddleware.run);

export const persistor = persistStore(store);
