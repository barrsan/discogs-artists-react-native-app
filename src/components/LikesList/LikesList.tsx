import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ArtistsListItem } from '../ArtistsList';
import { Empty } from '../Empty';
import { colors } from '../../constants';
import cssInTs from '../../helpers/cssInTs';
import { IArtist } from '../../types';

interface IProps {
  items: IArtist[];
  unlikeArtist: (id: number) => void;
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
});

class LikesList extends PureComponent<IProps> {
  keyExtractor = (item: IArtist) => item.uuid.toString();

  renderListItemSeparator = () => <View style={styles.separator} />;

  renderEmpty = () => <Empty coverName="likes" />;

  renderItem = ({ item }: { item: IArtist }) => {
    const { unlikeArtist } = this.props;
    return <ArtistsListItem unlikeArtist={unlikeArtist} liked {...item} />;
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
        ItemSeparatorComponent={this.renderListItemSeparator}
        ListEmptyComponent={this.renderEmpty}
      />
    );
  }
}

export default LikesList;
