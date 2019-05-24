import { createSelector, Selector } from 'reselect';
import likesSelectors from './likes';
import { IReduxState, IArtist, IErrors } from '../types';

interface IArtists {
  items: IArtist[];
  page: number;
  isDataEnd: boolean;
  errors: IErrors;
  isNetworkError: boolean;
  loading: boolean;
  refreshing: boolean;
  locked: boolean;
}

const { likesIdsSelector } = likesSelectors;

const artistsStateSelector: Selector<IReduxState, any> = state =>
  state.artists.toJS();

const artistsItemsSelector = createSelector(
  artistsStateSelector,
  ({ items }: IArtists) => items,
);

const artistsItemsWithLikesStatusSelector = createSelector(
  artistsItemsSelector,
  likesIdsSelector,
  (items: IArtist[], likes: number[]) =>
    items.map((i: IArtist) => {
      const newItem = i;
      newItem.liked = likes.indexOf(i.id) !== -1;
      return newItem;
    }),
);

const artistsPageSelector = createSelector(
  artistsStateSelector,
  ({ page }: IArtists) => page,
);

const artistsIsDataEndSelector = createSelector(
  artistsStateSelector,
  ({ isDataEnd }: IArtists) => isDataEnd,
);

const artistsLoadingSelector = createSelector(
  artistsStateSelector,
  ({ loading }: IArtists) => loading,
);

const artistsRefreshingSelector = createSelector(
  artistsStateSelector,
  ({ refreshing }: IArtists) => refreshing,
);

const artistsErrorsSelector = createSelector(
  artistsStateSelector,
  ({ errors }: IArtists) => errors,
);

const artistsLockedSelector = createSelector(
  artistsStateSelector,
  ({ locked }: IArtists) => locked,
);

export default {
  artistsItemsSelector,
  artistsItemsWithLikesStatusSelector,
  artistsPageSelector,
  artistsIsDataEndSelector,
  artistsLoadingSelector,
  artistsRefreshingSelector,
  artistsErrorsSelector,
  artistsLockedSelector,
};
