import React from 'react';
import styled, { css } from 'styled-components';

interface ProfileProps {
  isVertical: boolean;
}

export default function Profile({ isVertical }: ProfileProps) {
  return (
    <Container isVertical={isVertical}>
      <ProfileImage alt="프로필 이미지" />
      <InfoContainer>
        <Nickname>상하이</Nickname>
        <TwitterId>@music_star</TwitterId>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.section<{ isVertical: boolean }>`
  ${(props) =>
    props.isVertical &&
    css`
      display: flex;
      gap: 0.8rem;
    `}
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const InfoContainer = styled.section``;

const Nickname = styled.p`
  font: ${({ theme }) => theme.fonts.SB_17};
`;

const TwitterId = styled.p`
  color: ${({ theme }) => theme.colors.light_green};
  font: ${({ theme }) => theme.fonts.R_15};
`;
