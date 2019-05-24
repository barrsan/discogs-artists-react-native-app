import { fromJS, Map } from 'immutable';
import { reduxActions } from '../constants';
import { IArtist } from '../types';

interface IAction {
  type: string;
  payload: IActionPayload;
}

interface IActionPayload {
  artist?: IArtist;
  id?: number;
}

interface IArtistImmutable extends IArtist, Map<string, any> {}

const { LIKES_ADD_ARTIST, LIKES_DELETE_ARTIST } = reduxActions;

const INITIAL_STATE = fromJS({
  items: [],
});

export default (state = INITIAL_STATE, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case LIKES_ADD_ARTIST: {
      const { artist } = payload;
      return state.update('items', (i: IArtistImmutable[]) =>
        i.push(fromJS(artist)),
      );
    }

    case LIKES_DELETE_ARTIST: {
      const { id } = payload;
      const index = state
        .get('items')
        .findIndex((i: IArtistImmutable) => i.get('id') === id);
      return state.deleteIn(['items', index]);
    }

    default:
      return state;
  }
};
