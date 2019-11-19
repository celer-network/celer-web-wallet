import React from 'react';

import { Box } from '@material-ui/core';

const BoxWithMarginTop: React.FC<React.CSSProperties> = props => (
  <Box style={{ marginTop: '1em' }} {...props}></Box>
);

export default BoxWithMarginTop;
