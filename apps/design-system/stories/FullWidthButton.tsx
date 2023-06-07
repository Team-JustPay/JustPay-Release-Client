import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/theme';

interface FullButtonProps {
  /**
   * 버튼 내부에 들어가는 텍스트입니다.
   */
  text: string;
  /**
   * 버튼 색상입니다. 색상은 초록색 혹은 검은색입니다.
   */
  color: 'green' | 'black';
  /**
   * 버튼을 클릭했을 때 작동하는 함수입니다.
   */
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
  border: none;

  ${({ color }) =>
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
