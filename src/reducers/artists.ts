import { fromJS } from 'immutable';
import { artistsActions } from '../actions';
import { reduxActions } from '../constants';

interface IAction {
  type: string;
  payload?: IActionPayload;
}

interface IActionPayload {
  items?: [];
  page?: number;
  errorType?: string;
  status?: boolean;
  init?: boolean;
  refresh?: boolean;
  isNewFeed?: boolean;
  isEnd?: boolean;
  force?: boolean;
}

const { getArtists } = artistsActions;
const {
  ARTISTS_CLEAR_DATA,
  ARTISTS_SET_PAGE,
  ARTISTS_RESET_ERRORS,
  ARTISTS_RESET_LOADERS,
} = reduxActions;

const DEFAULT_ERRORS = {
  request: false,
  network: false,
};

const INITIAL_STATE = fromJS({
  items: [],
  page: 1,
  isDataEnd: false,
  loading: false,
  refreshing: false,
  locked: false,
  errors: DEFAULT_ERRORS,
});

export default (state = INITIAL_STATE, action: IAction) => {
  const { type, payload = {} } = action;

  switch (type) {
    case getArtists.TRIGGER: {
      const { init, refresh, force } = payload;
      let newState = state.set('loading', true).set('refreshing', !!refresh);

      if (init) {
        newState = newState.set('items', fromJS([]));
      }

      return init || refresh || force
        ? newState.set('isDataEnd', false).set('locked', false)
        : newState;
    }

    case getArtists.SUCCESS: {
      const { isNewFeed, isEnd, items } = payload;
      const currentPage = state.get('page');
      const newState = state
        .set('page', currentPage + 1)
        .set('isDataEnd', isEnd)
        .set('errors', fromJS(DEFAULT_ERRORS));

      return isNewFeed
        ? newState.set('items', fromJS(items))
        : newState.update('items', (i: []) => i.concat(fromJS(items)));
    }

    case getArtists.FAILURE: {
      const { errorType, status } = payload;
      return state.setIn(['errors', errorType], status).set('locked', true);
    }

    case getArtists.FULFILL: {
      return state.set('refreshing', false).set('loading', false);
    }

    case ARTISTS_CLEAR_DATA: {
      return state.set('items', fromJS([]));
    }

    case ARTISTS_RESET_ERRORS: {
      return state.set('errors', fromJS(DEFAULT_ERRORS));
    }

    case ARTISTS_RESET_LOADERS: {
      return state.set('loading', false).set('refreshing', false);
    }

    case ARTISTS_SET_PAGE: {
      const { page } = payload;
      return state.set('page', page);
    }

    default:
      return state;
  }
};
