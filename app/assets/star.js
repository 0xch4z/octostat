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
  <Svg height="15" width="15">
    <G id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="repo" fill="#000000">
        <Polygon points="14 5 9.1 4.36 7 0 4.9 4.36 0 5 3.6 8.26 2.67 13 7 10.67 11.33 13 10.4 8.26 14 5"/>
      </G>
    </G>
  </Svg>
);
