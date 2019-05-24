import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { debounce } from 'throttle-debounce';
import { Header } from '../Header';
import { SearchInput } from '../SearchInput';
import { ArtistsList } from '../ArtistsList';
// @ts-ignore
import splashScreenHide from '../../helpers/splashScreenHide'; // eslint-disable-line
import cssInTs from '../../helpers/cssInTs';
import { IArtist, IErrors, IRequestParams } from '../../types';

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

interface IState {
  searchEnabled: boolean;
  searchString: string;
  searchDirty: boolean;
  prevProps: IProps | null;
}

const styles = StyleSheet.create({
  container: cssInTs({
    flex: 1,
  }),

  searchWrapper: cssInTs({
    height: 40,
    justifyContent: 'center',
  }),
});

class Artists extends PureComponent<IProps, IState> {
  debouncedFetchArtists: (m: IRequestParams) => void;

  constructor(props: IProps) {
    super(props);
    this.debouncedFetchArtists = debounce(1000, this.fetchArtists);
  }

  static getDerivedStateFromProps(props: IProps, state: IState) {
    if (
      state.prevProps &&
      !state.searchDirty &&
      state.prevProps.loading &&
      state.prevProps.loading !== props.loading
    ) {
      return {
        searchDirty: true,
        searchEnabled: true,
        prevProps: props,
      };
    }
    return {
      prevProps: props,
    };
  }

  state = {
    searchEnabled: false,
    searchString: '',
    searchDirty: false,
    prevProps: null,
  };

  componentDidMount() {
    splashScreenHide();
  }

  fetchArtists = (params: IRequestParams) => {
    const { searchString } = this.state;
    const { getArtists, loading, refreshing } = this.props;

    if (!loading && !refreshing && searchString.length >= 3) {
      getArtists({
        searchString,
        ...params,
      });
    }
  };

  handleSearchInputChange = (value: string) => {
    this.setState(
      prevState => ({
        ...prevState,
        searchString: value,
        searchEnabled: true,
        searchDirty: false,
      }),
      () => {
        this.debouncedFetchArtists({
          init: true,
        });
      },
    );
  };

  handleSearchCancelPress = () => {
    const {
      clearArtists,
      resetErrorsArtists,
      resetLoadersArtists,
    } = this.props;
    this.setState(
      prevState => ({
        ...prevState,
        searchEnabled: false,
      }),
      () => {
        clearArtists();
        resetErrorsArtists();
        resetLoadersArtists();
      },
    );
  };

  render() {
    const { searchString, searchDirty, searchEnabled } = this.state;
    const {
      items,
      loading,
      refreshing,
      errors,
      likeArtist,
      unlikeArtist,
    } = this.props;

    return (
      <View style={styles.container}>
        <Header>
          <View style={styles.searchWrapper}>
            <SearchInput
              value={searchString}
              onChange={this.handleSearchInputChange}
              onCancel={this.handleSearchCancelPress}
            />
          </View>
        </Header>
        <ArtistsList
          items={items}
          loading={loading}
          refreshing={refreshing}
          errors={errors}
          searchEnabled={searchEnabled}
          searchString={searchString}
          searchDirty={searchDirty}
          fetchArtists={this.fetchArtists}
          likeArtist={likeArtist}
          unlikeArtist={unlikeArtist}
        />
      </View>
    );
  }
}

export default Artists;
