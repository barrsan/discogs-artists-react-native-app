import { createSelector, Selector } from 'reselect';
import { IReduxState, IArtist } from '../types';

const likesStateSelector: Selector<IReduxState, any> = state =>
  state.likes.toJS();

const likesSelector = createSelector(
  likesStateSelector,
  ({ items }: { items: IArtist[] }) => items,
);

const likesIdsSelector = createSelector(
  likesSelector,
  (items: IArtist[]) => items.map(({ id }) => id),
);

export default { likesSelector, likesIdsSelector };
