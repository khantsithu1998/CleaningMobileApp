import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import { palette } from 'utils/theme/colors';

function FilterOut(props) {
  const width = props.width;
  const height = props.height;
  return (
    <Svg viewBox="0 0 247.46 210" width={width} height={height}>
      <Path
        fill={palette.primary}
        stroke={palette.primary}
        strokeWidth={1}
        d="M246.744 13.984a7.5 7.5 0 00-6.784-4.301H7.5a7.501 7.501 0 00-5.787 12.271l89.361 108.384v99.94a7.5 7.5 0 0010.83 6.72l50.208-24.885a7.499 7.499 0 004.169-6.71l.098-75.062 89.366-108.388a7.497 7.497 0 00.999-7.969zM143.097 122.873a7.498 7.498 0 00-1.713 4.761l-.096 73.103-35.213 17.453v-90.546a7.496 7.496 0 00-1.713-4.771L23.404 24.682h200.651l-80.958 98.191z"
      />
    </Svg>
  );
}

export default FilterOut;
