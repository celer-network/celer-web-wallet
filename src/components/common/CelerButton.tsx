/**
 * @license
 * The MIT License
 *
 * Copyright (c) 2019 Celer Network
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

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
