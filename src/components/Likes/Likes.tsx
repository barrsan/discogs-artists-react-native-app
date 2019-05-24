import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from '../Header';
import { LikesList } from '../LikesList';
import cssInTs from '../../helpers/cssInTs';
import { colors } from '../../constants';
import { IArtist } from '../../types';

interface IProps {
  items: IArtist[];
  unlikeArtist: (id: number) => void;
}

const styles = StyleSheet.create({
  container: cssInTs({
    flex: 1,
  }),

  titleWrapper: cssInTs({
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }),

  title: cssInTs({
    fontSize: 15,
    fontWeight: '700',
    color: colors.WHITE,
  }),
});

const Likes: React.FC<IProps> = ({ items, unlikeArtist }: IProps) => (
  <View style={styles.container}>
    <Header>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Likes</Text>
      </View>
    </Header>
    <LikesList items={items} unlikeArtist={unlikeArtist} />
  </View>
);

export default Likes;
