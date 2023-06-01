import React from 'react';
import styled from 'styled-components';

import { ReactComponent as TruckLogo } from '../../assets/logo/truck.svg';

export default function PostInfo() {
  return (
    <InfoContainer>
      <TextContainer>
        <DateText>오후 7:49</DateText>
        <DateText>2023.02.06</DateText>
        <CommentText>댓글 11개</CommentText>
      </TextContainer>
      <DeliveryContainer>
        <DeliveryFee>배송비</DeliveryFee>
        <TruckLogo />
      </DeliveryContainer>
    </InfoContainer>
  );
}

const InfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1.5rem;
`;

const TextContainer = styled.article``;

const DateText = styled.span`
  color: ${({ theme }) => theme.colors.light_green};
  font: ${({ theme }) => theme.fonts.R_14};

  &::after {
    content: '.';
    display: inline;
    height: 14px;
    line-height: 14px;
    vertical-align: 4px;
    margin: 0 0.5rem;
  }
`;

const CommentText = styled.span`
  color: ${({ theme }) => theme.colors.dark_green};
  font: ${({ theme }) => theme.fonts.R_14_UNDERLINE};

  &::after {
    content: '';
    display: inline-block;
    vertical-align: 9px;
    margin-left: 2px;
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.just_green};
    border-radius: 50%;
  }
`;

const DeliveryContainer = styled.section`
  display: flex;

  p,
  svg {
    height: 25px;
    line-height: 25px;
  }
`;

const DeliveryFee = styled.p`
  color: ${({ theme }) => theme.colors.just_green};
  font: ${({ theme }) => theme.fonts.M_15};
`;
