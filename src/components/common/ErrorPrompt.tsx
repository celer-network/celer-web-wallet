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
