import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import ArtistsScreen from '../screens/ArtistsScreen';
import LikesScreen from '../screens/LikesScreen';
import { TabBarNavigator } from '../components/TabBarNavigator';
import { colors } from '../constants';

const AppTabs = createBottomTabNavigator(
  {
    Artists: ArtistsScreen,
    Likes: LikesScreen,
  },
  {
    tabBarComponent: TabBarNavigator,
    tabBarOptions: {
      activeTintColor: colors.PINK_1,
      inactiveTintColor: colors.GRAY_2,
    },
    initialRouteName: 'Artists',
  },
);

const navigatorAppContainer = createAppContainer(AppTabs);

export default navigatorAppContainer;
