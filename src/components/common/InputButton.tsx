import React from 'react';
import styled from 'styled-components';

interface InputButtonProps {
  text: string;
}
export default function InputButton({ text }: InputButtonProps) {
  return <StyledInputButton placeholder={text}></StyledInputButton>;
}

const StyledInputButton = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.bright_green};
  font: ${({ theme }) => theme.fonts.R_16}
  padding: 14px 0 14px 16px;
  border-radius: 10px;
  border : solid 0.5px ${({ theme }) => theme.colors.bright_green};
`;
