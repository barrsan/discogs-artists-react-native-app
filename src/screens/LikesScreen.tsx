import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import LikesContainer from '../containers/LikesContainer';
import cssInTs from '../helpers/cssInTs';
import { colors } from '../constants';

const styles = StyleSheet.create({
  fill: cssInTs({
    flex: 1,
    backgroundColor: colors.WHITE,
  }),
});

const LikesScreen = () => (
  <View style={styles.fill}>
    <StatusBar
      backgroundColor={colors.GRAY_3}
      barStyle="light-content"
      translucent
    />
    <LikesContainer />
  </View>
);

export default LikesScreen;
