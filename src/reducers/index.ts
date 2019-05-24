import { combineReducers } from 'redux';
import artists from './artists';
import likes from './likes';

export default combineReducers({
  artists,
  likes,
});
