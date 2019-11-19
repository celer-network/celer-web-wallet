import React from 'react';

import { CircularProgress } from '@material-ui/core';

import BoxWithMarginTop from './BoxWithMarginTop';
import CenteredFlexWithMarginTop from './CenteredFlexWithMarginTop';
import SmallPrompt from './SmallPrompt';
import Title from './Title';

export interface OnChainPromptProps {
  title: string;
  prompt: string;
}

const OnChainPrompt: React.FC<OnChainPromptProps> = ({ title, prompt }) => {
  return (
    <CenteredFlexWithMarginTop>
      <Title>{title}</Title>
      <BoxWithMarginTop>
        <CircularProgress />
      </BoxWithMarginTop>
      <SmallPrompt marginTop="1em">{prompt}</SmallPrompt>
    </CenteredFlexWithMarginTop>
  );
};

export default OnChainPrompt;
