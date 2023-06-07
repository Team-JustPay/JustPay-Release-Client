import React from 'react';
import styled from 'styled-components';

import Profile from '../../components/common/Profile';
import FullWidthButton from '../../components/common/FullWidthButton';
import PostInfo from './PostInfo';

export default function PostDetail() {
  return (
    <PostContainer>
      <Profile isVertical={true} />
      <PostText>wtb pc nctdream photocard 포카 양도</PostText>
      <PostImage alt="게시글 이미지" />
      <PostInfo />
      <FullWidthButton color="green" text="이 게시글 링크 복사하기" />
    </PostContainer>
  );
}

const PostContainer = styled.section`
  width: 100%;
  padding: 2.4rem 1.6rem;
  border-bottom: 0.5px solid #d5dad9;
`;

const PostText = styled.p`
  padding: 15px 0 50px;
  font: ${({ theme }) => theme.fonts.R_16};
`;

const PostImage = styled.img`
  width: 100%;
  height: 174px;
  border-radius: 13px;
`;
