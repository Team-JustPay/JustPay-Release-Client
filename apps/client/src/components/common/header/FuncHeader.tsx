import React from 'react';
import styled from 'styled-components';

import { Header, HeaderSection } from './HeaderStyle';

import { ReactComponent as LeftArrow } from '../../../assets/logo/left_arrow.svg';
import { ReactComponent as CloseButton } from '../../../assets/logo/x_logo.svg';
import { ReactComponent as MoreButton } from '../../../assets/logo/more_logo.svg';

import { useNavigate } from 'react-router-dom';

interface FuncHeaderProps {
  title?: string;
  leftFunc?: boolean;
  rightFunc?: 'more' | 'close' | 'modify';
}

export default function FuncHeader({ title, leftFunc, rightFunc }: FuncHeaderProps) {
  const navigate = useNavigate();

  // 뒤로 가기 버튼
  const handleClickBackButton = () => {
    navigate(-1);
  };

  return (
    <Header>
      <HeaderSection>{leftFunc && <LeftArrow onClick={handleClickBackButton} />}</HeaderSection>
      <Title>{title}</Title>
      <HeaderSection>
        {rightFunc === 'close' && <CloseButton />}
        {rightFunc === 'more' && <MoreButton />}
        {rightFunc === 'modify' && <ModifyText>수정</ModifyText>}
      </HeaderSection>
    </Header>
  );
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black_green};
  font: ${({ theme }) => theme.fonts.SB_17};
`;

const ModifyText = styled.p`
  color: ${({ theme }) => theme.colors.bright_green};
  font: ${({ theme }) => theme.fonts.SB_17};
`;
