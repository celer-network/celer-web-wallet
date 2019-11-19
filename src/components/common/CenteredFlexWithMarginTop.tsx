import React from 'react';
import { Flex } from 'rimble-ui';

const CenteredFlexWithMarginTop: React.FC<React.CSSProperties> = props => (
  <Flex
    style={{
      marginTop: '1em',
      position: 'fixed',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, 0%)'
    }}
    flexDirection="column"
    alignItems={props.alignItems ? props.alignItems : 'center'}
    width="25%"
    {...props}
  ></Flex>
);

export default CenteredFlexWithMarginTop;
