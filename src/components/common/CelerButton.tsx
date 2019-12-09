import React from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/core/styles';

import { CELER_FONT } from '../../utils/utils';

const StyledButton = styled(Button)`
  font-family: ${CELER_FONT};
  && {
    color: #ffffff;
    background-color: #000000;
    border-radius: 12px;
  }
  height: 40px;
  min-height: 40px;
  width: 336px;
  max-width: 336px;
  text-transform: none;

  &:hover {
    background-color: #616161;
  }
`;

const CelerButton: React.FC<ButtonProps> = props => (
  <StylesProvider injectFirst>
    <StyledButton
      variant="contained"
      color="primary"
      size={'medium'}
      {...props}
    ></StyledButton>
  </StylesProvider>
);

export default CelerButton;
