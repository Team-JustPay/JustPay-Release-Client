import React from 'react';
import styled from 'styled-components';

interface MarginProps {
  height: number;
}

export default function Margin({ height }: MarginProps) {
  return <MarginContainer height={height}></MarginContainer>;
}

const MarginContainer = styled.section<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;
