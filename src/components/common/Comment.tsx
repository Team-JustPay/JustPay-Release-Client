import React from 'react';
import styled from 'styled-components';
import { ReactComponent as UserProfile } from '../../assets/icon/UserProfile.svg';

interface CommentProps {
  comment: commentType[];
}

interface commentType {
  userName: string;
  content: string;
  index: number;
}

export default function Comment({ comment }: CommentProps) {
  return (
    <>
      {comment.map(({ userName, content, index }) => {
        return (
          <CommentSection key={index} index={index}>
            <VerticalLine>
              <div></div>
            </VerticalLine>
            <UserContainer>
              <UserProfile />
              <CommentContainer>
                <UserNameContainer>
                  <UserName>{userName}</UserName>
                  {index === 0 && <FirstComment>구매자 첫 댓글</FirstComment>}
                </UserNameContainer>
                <CommentContent>{content}</CommentContent>
              </CommentContainer>
            </UserContainer>
          </CommentSection>
        );
      })}
    </>
  );
}

const CommentSection = styled.article<{ index: number }>`
  margin-top: ${({ index }) => (index === 0 ? '8px' : '-10px')};
`;
const VerticalLine = styled.div`
  height: 28px;
  width: 24px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  div {
    background-color: ${({ theme }) => theme.colors.just_green};
    width: 2px;
    height: 27px;
  }
`;

const UserContainer = styled.article`
  display: flex;
  flex-direction: row;
`;

const CommentContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const UserNameContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const UserName = styled.h1`
  color: ${({ theme }) => theme.colors.black_green};
  font: ${({ theme }) => theme.fonts.SB_15_2};
  letter-spacing: 0;
  margin: 0 8px;
`;

const FirstComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 2px 8px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white_green};
  color: ${({ theme }) => theme.colors.dark_green};
  font: ${({ theme }) => theme.fonts.R_11};
`;

const CommentContent = styled.p`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.dark_green};
  font: ${({ theme }) => theme.fonts.R_14};
`;
