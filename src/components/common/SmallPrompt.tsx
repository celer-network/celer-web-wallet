import React from 'react';
import { Text } from 'rimble-ui';

import { CELER_FONT } from '../../utils/utils';

const SmallPrompt: React.FC<React.CSSProperties> = props => (
  <Text
    color={props.color ? props.color : '#8E8E93'}
    fontFamily={CELER_FONT}
    fontSize="16px"
    letterSpacing="0.19px"
    lineHeight="19px"
    textAlign={props.textAlign ? props.textAlign : 'center'}
    {...props}
  ></Text>
);

export default SmallPrompt;
