import uuid4 from 'uuid/v4';
import { select, put, call, takeLatest } from 'redux-saga/effects';
import { artistsActions } from '../actions';
import { artistsSelectors } from '../selectors';
import { apiArtist } from '../api';

interface IGetArtistsAction {
  type: string;
  payload: IGetArtistsActionPayload;
}

interface IArrayItem {
  uuid: string;
}

interface IGetArtistsActionPayload {
  searchString: string;
  init?: boolean;
  refresh?: boolean;
}

const {
  artistsPageSelector,
  artistsIsDataEndSelector,
  artistsLockedSelector,
} = artistsSelectors;

function* getArtists(action: IGetArtistsAction) {
  const { searchString, init, refresh } = action.payload;
  const { success, failure, fulfill } = artistsActions.getArtists;

  const isDataEnd = yield select(artistsIsDataEndSelector);
  const isLock = yield select(artistsLockedSelector);
  const page = yield select(artistsPageSelector);

  if (isDataEnd || isLock) {
    yield put(fulfill());
  } else {
    try {
      const { data, isEnd } = yield call(apiArtist.getArtists, {
        searchString,
        page: init || refresh ? 1 : page,
      });

      if (init || refresh) {
        yield put(artistsActions.setPageArtists(2));
      }

      /*
        У Discogs API есть ошибка.
        Если посмотреть на результат запросов
        https://api.discogs.com/database/search?q=Mar&type=artist&token=YOU_TOKEN&page=2 и 
        https://api.discogs.com/database/search?q=Mar&type=artist&token=YOU_TOKEN&page=3.
        В первом случае получим последним в выдачи элемент с id 4340348, а во втором
        первый элемент в выдачи с таким же id - 4340348.
        Поэтому пришлось присваивать собственные uuid для реализации уникальности записей
        и последующего использования в списках данного uuid как уникальный ключ элемента.
      */
      const items = data.results.map((i: IArrayItem) => {
        const artist = i;
        artist.uuid = uuid4();
        return artist;
      });

      const result = {
        items,
        isNewFeed: init || refresh,
        isEnd,
      };

      yield put(success(result));
    } catch (error) {
      if (error.message && error.message === 'Network Error') {
        yield put(
          failure({
            errorType: 'network',
            status: true,
          }),
        );
      } else {
        yield put(
          failure({
            errorType: 'request',
            status: true,
          }),
        );
      }
    } finally {
      yield put(fulfill());
    }
  }
}

export default function* watcherSaga() {
  yield takeLatest(artistsActions.getArtists.TRIGGER, getArtists);
}
