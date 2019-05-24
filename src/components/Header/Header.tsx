import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { colors } from '../../constants';
import cssInTs from '../../helpers/cssInTs';
import { IReactChildren } from '../../types';

interface IProps extends IReactChildren {}

const styles = StyleSheet.create({
  header: cssInTs({
    paddingTop: Platform.select({ ios: isIphoneX() ? 54 : 34, android: 40 }),
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    backgroundColor: colors.GRAY_3,
  }),
});

const Header: React.FC<IProps> = ({ children }: IProps) => (
  <View style={styles.header}>{children}</View>
);

export default Header;
