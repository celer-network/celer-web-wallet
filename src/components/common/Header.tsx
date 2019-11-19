import React from 'react';
import { Flex } from 'rimble-ui';

import { Box, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons/';

import SmallPrompt from './SmallPrompt';

export interface HeaderProps {
  text: string;
  close: () => void;
}

const Header: React.FC<HeaderProps> = ({ text, close }) => {
  return (
    <Box width="336px" bgcolor="#219DDB" alignItems="center">
      <Flex>
        <SmallPrompt
          color="#FFFFFF"
          width="90%"
          marginTop="15px"
          marginLeft="45px"
        >
          {text}
        </SmallPrompt>
        <IconButton onClick={close}>
          <Close />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Header;
