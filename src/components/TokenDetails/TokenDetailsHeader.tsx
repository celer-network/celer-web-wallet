import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flex } from 'rimble-ui';

import { Box, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons/';

import SmallPrompt from '../common/SmallPrompt';

export interface TokenDetailsHeaderProps {
  symbol: string;
}

const TokenDetailsHeader: React.FC<TokenDetailsHeaderProps> = ({ symbol }) => {
  const history = useHistory();

  return (
    <Box width="336px" bgcolor="#219DDB" alignItems="center">
      <Flex>
        <IconButton onClick={() => history.replace('/tokens')}>
          <ArrowBack />
        </IconButton>
        <SmallPrompt
          color="#FFFFFF"
          width="100%"
          marginTop="15px"
          marginLeft="-45px"
        >
          {symbol}
        </SmallPrompt>
      </Flex>
    </Box>
  );
};

export default TokenDetailsHeader;
