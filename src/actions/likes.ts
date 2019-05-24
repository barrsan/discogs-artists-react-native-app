import { reduxActions } from '../constants';
import { IArtist } from '../types';

const { LIKES_ADD_ARTIST, LIKES_DELETE_ARTIST } = reduxActions;

const likeArtist = (artist: IArtist) => ({
  type: LIKES_ADD_ARTIST,
  payload: {
    artist,
  },
});

const unlikeArtist = (id: number) => ({
  type: LIKES_DELETE_ARTIST,
  payload: {
    id,
  },
});

export default {
  likeArtist,
  unlikeArtist,
};
