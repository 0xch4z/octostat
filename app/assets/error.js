import React from 'react';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default () => (
  <Svg height="48" width="48">
    <G id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="error" fill="#000000">
        <Path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/>
      </G>
    </G>
  </Svg>
);
