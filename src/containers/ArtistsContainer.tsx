import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Artists } from '../components/Artists';
import { artistsActions, likesActions } from '../actions';
import { artistsSelectors } from '../selectors';
import { IReduxState, IArtist, IErrors } from '../types';

interface IProps {
  items: IArtist[];
  loading: boolean;
  refreshing: boolean;
  errors: IErrors;
  getArtists: (o: object) => void;
  clearArtists: () => void;
  resetErrorsArtists: () => void;
  resetLoadersArtists: () => void;
  likeArtist: (artist: IArtist) => void;
  unlikeArtist: (id: number) => void;
}

const {
  artistsItemsWithLikesStatusSelector,
  artistsLoadingSelector,
  artistsRefreshingSelector,
  artistsErrorsSelector,
} = artistsSelectors;

const ArtistsContainer = (props: IProps) => <Artists {...props} />;

const mapStateToProps = (state: IReduxState) => ({
  items: artistsItemsWithLikesStatusSelector(state),
  loading: artistsLoadingSelector(state),
  refreshing: artistsRefreshingSelector(state),
  errors: artistsErrorsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...artistsActions,
      ...likesActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistsContainer);
