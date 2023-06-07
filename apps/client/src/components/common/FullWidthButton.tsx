import React from 'react';
import styled, { css } from 'styled-components';

interface FullButtonProps {
  text: string;
  color: 'green' | 'black';
  onClick?: () => void;
}

export default function FullWidthButton({ text, onClick, color }: FullButtonProps) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;

  ${({ color, theme }) =>
    color === 'green'
      ? css`
          background-color: rgba(22, 215, 192, 0.15);
          color: ${theme.colors.green_text};
          font: ${theme.fonts.M_14};
          padding: 1rem 0;
          border-radius: 1px;
        `
      : css`
          background-color: ${theme.colors.button_black};
          color: ${theme.colors.white};
          font: ${theme.fonts.M_17};
          padding: 14px 0;
          border-radius: 10px;
        `}
`;
