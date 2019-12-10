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
import { useHistory } from 'react-router-dom';
import { Text } from 'rimble-ui';

import { Link } from '@material-ui/core';
import { Error } from '@material-ui/icons';

import { CELER_FONT } from '../../utils/utils';
import BoxWithMarginTop from './BoxWithMarginTop';
import CenteredFlexWithMarginTop from './CenteredFlexWithMarginTop';
import SmallPrompt from './SmallPrompt';
import Title from './Title';

export interface ErrorPromptProps {
  title: string;
  prompt: string;
}

const ErrorPrompt: React.FC<ErrorPromptProps> = ({ title, prompt }) => {
  const history = useHistory();

  return (
    <CenteredFlexWithMarginTop>
      <Title>{title}</Title>
      <BoxWithMarginTop>
        <Error />
      </BoxWithMarginTop>
      <SmallPrompt marginTop="1em">{prompt}</SmallPrompt>
      <BoxWithMarginTop>
        <Link
          onClick={() => {
            history.replace('/');
          }}
        >
          <Text fontFamily={CELER_FONT}>Back home</Text>
        </Link>
      </BoxWithMarginTop>
    </CenteredFlexWithMarginTop>
  );
};

export default ErrorPrompt;
