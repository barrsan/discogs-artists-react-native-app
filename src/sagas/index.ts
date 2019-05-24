import { all, spawn } from 'redux-saga/effects';
import watcherArtists from './artists';

export default function* rootSaga() {
  yield all([yield spawn(watcherArtists)]);
}
