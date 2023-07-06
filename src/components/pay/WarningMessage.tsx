import React from 'react';
import styled from 'styled-components';

interface WarningMessageProps {
  color: string;
  text: string;
}
export default function WarningMessage({ color, text }: WarningMessageProps) {
  return <Message color={color}>{text}</Message>;
}
const Message = styled.p<{ color: string }>`
  color: ${({ color }) => (color === 'gray' ? '#455553' : '#C64BFF')};
  font: ${({ theme }) => theme.fonts.R_14};
  margin-top: -1.6rem;
  margin-bottom: 1.6rem;
`;
