import React from 'react';
import styled from 'styled-components';

interface FullButtonProps {
  text: string;
  onClick?: () => void;
}

export default function FullButton({ text, onClick }: FullButtonProps) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  background-color: rgba(22, 215, 192, 0.15);
  border-radius: 1px;
  color: ${({ theme }) => theme.colors.green_text};
  font: ${({ theme }) => theme.fonts.M_14};
`;
