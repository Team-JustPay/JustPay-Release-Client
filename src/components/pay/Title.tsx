import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  color: string;
  content: string;
}
export default function Title({ color, content }: TitleProps) {
  return <TitleContainer fontColor={color}>{content}</TitleContainer>;
}

const TitleContainer = styled.h1<{ fontColor: string }>`
  color: ${({ fontColor }) => (fontColor === 'black' ? '#2A3E3B' : '#3674FF')};
  font: ${({ theme }) => theme.fonts.B_22};
  color: fontColor;
  margin-bottom: 2.4rem;
  margin-top: 4rem;
`;
