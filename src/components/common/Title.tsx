import React from 'react';
import { Text } from 'rimble-ui';

import { CELER_FONT } from '../../utils/utils';

const Title: React.FC<React.CSSProperties> = props => (
  <Text
    color="#000000"
    fontFamily={CELER_FONT}
    fontWeight={props.fontWeight ? props.fontWeight : 'bold'}
    fontSize="16px"
    letterSpacing="0.19px"
    {...props}
  ></Text>
);

export default Title;
