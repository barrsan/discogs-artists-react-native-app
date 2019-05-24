import React, { PureComponent } from 'react';
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { SvgSearch, SvgCrossRounded } from '../Svg';
import cssInTs from '../../helpers/cssInTs';
import { colors } from '../../constants';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onCancel: () => void;
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  search: cssInTs({
    flex: 1,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
  }),

  inputWrapper: cssInTs({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    maxWidth: '100%',
    backgroundColor: colors.GRAY_2,
    borderRadius: 10,
  }),

  input: cssInTs({
    flex: 1,
    width,
    maxWidth: '100%',
    height: 36,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    color: colors.WHITE,
  }),

  cancel: cssInTs({
    width: 68,
    alignItems: 'flex-end',
  }),

  cancelLabel: cssInTs({
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.PINK_1,
  }),
});

class SearchInput extends PureComponent<IProps> {
  animatedValue = new Animated.Value(100);

  inputRef = React.createRef<TextInput>();

  showCancelButton = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 300,
    }).start();
  };

  hideCancelButton = () => {
    Animated.timing(this.animatedValue, {
      toValue: 100,
      duration: 300,
    }).start();
  };

  handleInputChange = (value: string) => {
    const { onChange } = this.props;
    onChange(value);
  };

  handleInputBlur = () => {
    const { value } = this.props;
    if (!value) {
      this.hideCancelButton();
    }
  };

  handleInputFocus = () => {
    this.showCancelButton();
  };

  handleClearPress = () => {
    const { onChange } = this.props;
    onChange('');
  };

  handleCancelPress = () => {
    const { onChange, onCancel } = this.props;
    onChange('');
    onCancel();
    this.hideCancelButton();

    if (this.inputRef.current) {
      this.inputRef.current.blur();
    }
  };

  render() {
    const { value } = this.props;
    const placeholder = 'Try "Michael Jackson"';

    const inputWidth = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [width - 100, width],
    });

    const cancelPositionX = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 100],
    });

    const animatedInputStyle = {
      width: inputWidth,
    };

    const animatedCancelStyle = {
      transform: [
        {
          translateX: cancelPositionX,
        },
      ],
    };

    return (
      <View style={styles.search}>
        <Animated.View style={[styles.inputWrapper, animatedInputStyle]}>
          <SvgSearch width={18} height={18} fill={colors.PINK_1} />
          <TextInput
            style={styles.input}
            ref={this.inputRef}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.GRAY_1}
            selectionColor={colors.PINK_1}
            numberOfLines={1}
            onChangeText={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            autoCorrect={false}
          />
          {value ? (
            <TouchableOpacity onPress={this.handleClearPress}>
              <SvgCrossRounded width={16} height={16} fill={colors.GRAY_1} />
            </TouchableOpacity>
          ) : null}
        </Animated.View>
        <Animated.View style={[styles.cancel, animatedCancelStyle]}>
          <TouchableOpacity onPress={this.handleCancelPress}>
            <Text style={styles.cancelLabel}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

export default SearchInput;
