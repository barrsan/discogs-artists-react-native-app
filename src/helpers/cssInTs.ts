import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type Styles = ViewStyle & TextStyle & ImageStyle;

export default (style: Styles) => style;
