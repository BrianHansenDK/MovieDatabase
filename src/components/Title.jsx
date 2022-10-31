import React, { memo } from 'react';
import { CreatorTxt, TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle, quote }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <CreatorTxt>{quote}</CreatorTxt>
    </TitleWrapper>
  );
};

export default memo(Title);
