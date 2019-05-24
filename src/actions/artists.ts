import { createRoutine } from 'redux-saga-routines';
import { reduxActions } from '../constants';

const {
  ARTISTS_FETCH_DATA,
  ARTISTS_CLEAR_DATA,
  ARTISTS_SET_PAGE,
  ARTISTS_RESET_ERRORS,
  ARTISTS_RESET_LOADERS,
} = reduxActions;

const getArtists = createRoutine(ARTISTS_FETCH_DATA);

const clearArtists = () => ({
  type: ARTISTS_CLEAR_DATA,
});

const resetErrorsArtists = () => ({
  type: ARTISTS_RESET_ERRORS,
});

const resetLoadersArtists = () => ({
  type: ARTISTS_RESET_LOADERS,
});

const setPageArtists = (page: number) => ({
  type: ARTISTS_SET_PAGE,
  payload: {
    page,
  },
});

export default {
  getArtists,
  clearArtists,
  resetErrorsArtists,
  resetLoadersArtists,
  setPageArtists,
};
