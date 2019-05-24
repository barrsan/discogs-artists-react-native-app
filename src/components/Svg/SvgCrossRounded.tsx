import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../types';

const SvgCrossRounded: React.FC<ISvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M17.016 15.609L13.407 12l3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406L10.595 12l-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016z" />
  </Svg>
);

export default SvgCrossRounded;
