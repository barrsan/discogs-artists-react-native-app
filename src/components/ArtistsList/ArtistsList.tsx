import React, { PureComponent } from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import ArtistsListItem from './ArtistsListItem';
import { Empty } from '../Empty';
import { colors } from '../../constants';
import cssInTs from '../../helpers/cssInTs';
import { IArtist, IErrors, IRequestParams } from '../../types';

interface IProps {
  items: IArtist[];
  loading: boolean;
  refreshing: boolean;
  errors: IErrors;
  searchEnabled: boolean;
  searchString: string;
  searchDirty: boolean;
  fetchArtists: (p: IRequestParams) => void;
  likeArtist: (artist: IArtist) => void;
  unlikeArtist: (id: number) => void;
}

interface ICover {
  name: string;
  active: boolean;
}

const styles = StyleSheet.create({
  listContentContainer: cssInTs({
    flexGrow: 1,
  }),

  separator: cssInTs({
    marginLeft: 16,
    marginRight: 16,
    borderBottomColor: colors.GRAY_1,
    borderBottomWidth: 1,
  }),

  footer: cssInTs({
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  tryAgainButton: cssInTs({
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.GRAY_4,
  }),

  tryAgain: cssInTs({
    fontSize: 15,
    color: colors.PINK_1,
  }),
});

class ArtistsList extends PureComponent<IProps> {
  keyExtractor = (item: IArtist) => item.uuid.toString();

  handleRefresh = () => {
    const { fetchArtists } = this.props;
    fetchArtists({
      refresh: true,
    });
  };

  handleLoadMore = () => {
    const { fetchArtists, errors } = this.props;
    if (!errors.network && !errors.request) {
      fetchArtists({});
    }
  };

  handleTryAgainPress = () => {
    const { fetchArtists } = this.props;
    fetchArtists({ force: true });
  };

  renderListItemSeparator = () => <View style={styles.separator} />;

  renderFooter = () => {
    const { loading, errors, items } = this.props;
    if (loading && items.length) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator size="small" color={colors.PINK_1} />
        </View>
      );
    }

    if ((errors.network || errors.request) && items.length) {
      return (
        <TouchableOpacity
          style={styles.tryAgainButton}
          onPress={this.handleTryAgainPress}
        >
          <Text style={styles.tryAgain}>Loading error. Tap to try again</Text>
        </TouchableOpacity>
      );
    }

    return null;
  };

  renderEmpty = () => {
    const {
      searchString,
      searchDirty,
      searchEnabled,
      loading,
      errors,
    } = this.props;

    const covers: ICover[] = [
      {
        name: 'loading',
        active: loading,
      },
      {
        name: 'errorConnection',
        active: errors.network && !loading,
      },
      {
        name: 'errorRequest',
        active: errors.request && !loading,
      },
      {
        name: 'notFound',
        active: !!(
          searchString &&
          searchDirty &&
          !errors.network &&
          !errors.request &&
          !loading
        ),
      },
      {
        name: 'home',
        active: !searchEnabled && !loading,
      },
    ];

    const cover = covers.find(i => i.active);
    const name = cover ? cover.name : null;

    return <Empty coverName={name} />;
  };

  renderRefresh = () => {
    const { refreshing } = this.props;
    return (
      <RefreshControl
        tintColor={colors.PINK_1}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      />
    );
  };

  renderItem = ({ item }: { item: IArtist }) => {
    const { likeArtist, unlikeArtist } = this.props;
    return (
      <ArtistsListItem
        likeArtist={likeArtist}
        unlikeArtist={unlikeArtist}
        {...item}
      />
    );
  };

  render() {
    const { items } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        data={items}
        extraData={items}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.2}
        refreshControl={this.renderRefresh()}
        ItemSeparatorComponent={this.renderListItemSeparator}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmpty}
      />
    );
  }
}

export default ArtistsList;
