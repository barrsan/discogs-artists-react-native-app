import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Platform,
  EmitterSubscription,
} from 'react-native';
import {
  NavigationRoute,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import TabBarButton from './TabBarButton';
import { SvgHeart, SvgSearch } from '../Svg';
import cssInTs from '../../helpers/cssInTs';
import { colors } from '../../constants';

interface IProps {
  activeTintColor: string;
  inactiveTintColor: string;
  navigation: NavigationScreenProp<NavigationState>;
  getLabelText: (r: { route: NavigationRoute }) => string;
  onTabPress: (r: { route: NavigationRoute }) => void;
}

interface IState {
  visible: boolean;
}

const styles = StyleSheet.create({
  tabBar: cssInTs({
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: isIphoneX() ? getBottomSpace() : 10,
    borderColor: colors.GRAY_1,
    backgroundColor: colors.GRAY_5,
    borderTopWidth: 1,
  }),

  title: cssInTs({
    marginTop: 6,
    fontWeight: '600',
    color: colors.GRAY_2,
  }),
});

class TabBarNavigator extends PureComponent<IProps, IState> {
  keyboardEventListeners: EmitterSubscription[];

  constructor(props: IProps) {
    super(props);
    this.keyboardEventListeners = [];
  }

  state = {
    visible: true,
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', this.setVisible(false)),
        Keyboard.addListener('keyboardDidHide', this.setVisible(true)),
      ];
    }
  }

  componentWillUnmount() {
    this.keyboardEventListeners.forEach(listener => {
      listener.remove();
    });
  }

  setVisible = (visible: boolean) => () => this.setState({ visible });

  render() {
    const { visible } = this.state;
    const {
      getLabelText,
      activeTintColor,
      inactiveTintColor,
      onTabPress,
      navigation,
    } = this.props;

    const { routes, index } = navigation.state;

    return visible ? (
      <View style={styles.tabBar}>
        {routes.map((route: NavigationRoute, routeIndex: number) => {
          const isRouteActive = routeIndex === index;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          const routeName = getLabelText({ route });
          const IconComponent = routeName === 'Likes' ? SvgHeart : SvgSearch;

          return (
            <TabBarButton onTabPress={onTabPress} route={route} key={routeName}>
              <IconComponent width={20} height={20} fill={tintColor} />
              <Text style={styles.title}>{routeName}</Text>
            </TabBarButton>
          );
        })}
      </View>
    ) : null;
  }
}

export default TabBarNavigator;
