/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import styled, { css } from 'styled-components';

interface FullButtonProps {
  text: string;
  color: 'green' | 'justGreen' | 'black' | 'gray';
  onClick?: () => void;
}

export default function FullWidthButton({ text, onClick, color }: FullButtonProps) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
}

const SelectButtonCSS = (color: string | undefined, theme: { colors: any; fonts: any }) => {
  switch (color) {
    case 'green':
      return css`
        width: 100%;
        background-color: rgba(22, 215, 192, 0.15);
        color: ${theme.colors.green_text};
        font: ${theme.fonts.M_14};
        padding: 1rem 0;
        border-radius: 1px;
      `;
    case 'black':
      return css`
        width: 100%;
        background-color: ${theme.colors.button_black};
        color: ${theme.colors.white};
        font: ${theme.fonts.M_17};
        padding: 14px 0;
        border-radius: 10px;
      `;
    case 'justGreen':
      return css`
        width: 100%;
        background-color: ${theme.colors.just_green};
        color: ${theme.colors.white};
        font: ${theme.fonts.M_17};
        padding: 14px 0;
        border-radius: 10px;
      `;
    case 'gray':
      return css`
        width: 100%;
        background-color: ${theme.colors.inactive_background};
        color: ${theme.colors.bright_green};
        font: ${theme.fonts.M_16};
        padding: 14px 0;
        border: 0.5px solid #d5dad9;
        border-radius: 10px;
      `;
  }
};

const StyledButton = styled.button`
  ${({ color, theme }) => SelectButtonCSS(color, theme)}
`;
