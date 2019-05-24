import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../types';

const SvgHeart: React.FC<ISvgProps> = props => (
  <Svg viewBox="0 0 28 28" {...props}>
    <Path d="M14 26c-.25 0-.5-.094-.688-.281l-9.75-9.406c-.125-.109-3.563-3.25-3.563-7C-.001 4.735 2.796 2 7.468 2c2.734 0 5.297 2.156 6.531 3.375C15.233 4.156 17.796 2 20.53 2c4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375a.972.972 0 0 1-.688.281z" />
  </Svg>
);

export default SvgHeart;
