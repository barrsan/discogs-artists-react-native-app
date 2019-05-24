import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import {
  SvgDiscogsLogo,
  SvgSearch,
  SvgAlert,
  SvgDisconnected,
  SvgHeartOutline,
} from '../Svg';
import { colors } from '../../constants';
import cssInTs from '../../helpers/cssInTs';

interface IProps {
  coverName: string | null;
}

const styles = StyleSheet.create({
  fill: cssInTs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  title: cssInTs({
    marginTop: 10,
    fontSize: 17,
    color: colors.GRAY_3,
  }),
});

const Empty: React.FC<IProps> = ({ coverName }: IProps) => {
  if (coverName === 'loading') {
    return (
      <View style={styles.fill}>
        <ActivityIndicator size="large" color={colors.PINK_1} />
      </View>
    );
  }

  if (coverName === 'notFound') {
    return (
      <View style={styles.fill}>
        <SvgSearch width={52} height={52} fill={colors.GRAY_3} />
        <Text style={styles.title}>Nothing found</Text>
      </View>
    );
  }

  if (coverName === 'errorConnection') {
    return (
      <View style={styles.fill}>
        <SvgDisconnected width={52} height={52} fill={colors.GRAY_3} />
        <Text style={styles.title}>Check internet connection</Text>
      </View>
    );
  }

  if (coverName === 'errorRequest') {
    return (
      <View style={styles.fill}>
        <SvgAlert width={52} height={52} fill={colors.GRAY_3} />
        <Text style={styles.title}>Ooops... something wrong</Text>
      </View>
    );
  }

  if (coverName === 'likes') {
    return (
      <View style={styles.fill}>
        <SvgHeartOutline width={52} height={52} fill={colors.GRAY_3} />
        <Text style={styles.title}>Your favorite artists here</Text>
      </View>
    );
  }

  if (coverName === 'home') {
    return (
      <View style={styles.fill}>
        <SvgDiscogsLogo width={108} height={52} fill={colors.GRAY_3} />
        <Text style={styles.title}>Find your favorite artists</Text>
      </View>
    );
  }

  return null;
};

export default Empty;
