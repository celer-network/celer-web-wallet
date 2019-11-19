import React from 'react';

import { CheckCircle } from '@material-ui/icons';

import BoxWithMarginTop from './BoxWithMarginTop';
import CelerButton from './CelerButton';
import CenteredFlexWithMarginTop from './CenteredFlexWithMarginTop';
import Title from './Title';

export interface SuccessPromptProps {
  title: string;
  doneCallback: () => void;
}

const SuccessPrompt: React.FC<SuccessPromptProps> = ({
  title,
  doneCallback
}) => {
  return (
    <CenteredFlexWithMarginTop>
      <Title>{title}</Title>
      <BoxWithMarginTop>
        <CheckCircle />
      </BoxWithMarginTop>
      <CelerButton style={{ marginTop: '2em' }} onClick={doneCallback}>
        Done
      </CelerButton>
    </CenteredFlexWithMarginTop>
  );
};

export default SuccessPrompt;
