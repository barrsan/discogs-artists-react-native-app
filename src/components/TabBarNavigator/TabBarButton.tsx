import React, { PureComponent } from 'react';
import { NavigationRoute } from 'react-navigation';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import cssInTs from '../../helpers/cssInTs';
import { IReactChildren } from '../../types';

interface IProps extends IReactChildren {
  route: NavigationRoute;
  onTabPress: (r: { route: NavigationRoute }) => void;
}

const styles = StyleSheet.create({
  buttonWrapper: cssInTs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  button: cssInTs({
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

class TabBarButton extends PureComponent<IProps> {
  handlePress = () => {
    const { onTabPress, route } = this.props;
    onTabPress({ route });
  };

  render() {
    const { children } = this.props;

    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabBarButton;
