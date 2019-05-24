import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import ArtistsContainer from '../containers/ArtistsContainer';
import cssInTs from '../helpers/cssInTs';
import { colors } from '../constants';

const styles = StyleSheet.create({
  fill: cssInTs({
    flex: 1,
    backgroundColor: colors.WHITE,
  }),
});

const ArtistsScreen = () => (
  <View style={styles.fill}>
    <StatusBar
      backgroundColor={colors.GRAY_3}
      barStyle="light-content"
      translucent
    />
    <ArtistsContainer />
  </View>
);

export default ArtistsScreen;
