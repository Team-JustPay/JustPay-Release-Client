import styled from 'styled-components';

interface PostInformationProps {
  postThumbnail: string;
  postTitle: string;
  postWriter: userProfile;
  postDate?: string;
}

interface userProfile {
  userThumbnail: string;
  userName: string;
  userTwitterId: string;
}

export default function PostInformation({ postThumbnail, postTitle, postWriter, postDate }: PostInformationProps) {
  return (
    <PostContainer>
      <PostImage src={postThumbnail} alt="게시글 이미지"></PostImage>
      <PostInformationContainer>
        <PostTitleContainer>
          <PostTitle>{postTitle}</PostTitle>
          <PostDate>{postDate}</PostDate>
        </PostTitleContainer>
        <PostWriterProfile>
          <img src={postWriter.userThumbnail} alt="유저 이미지" />
          <h1>{postWriter.userName}</h1>
          <h2>{postWriter.userTwitterId}</h2>
        </PostWriterProfile>
      </PostInformationContainer>
    </PostContainer>
  );
}

const PostContainer = styled.section`
  display: flex;
`;

const PostImage = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 2px;
  margin-right: 12px;
`;

const PostInformationContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9.6rem;
`;

const PostTitleContainer = styled.article`
  display: flex;
  flex-direction: row;
`;

const PostTitle = styled.h1`
  color: ${({ theme }) => theme.colors.middle_green};
  font: ${({ theme }) => theme.fonts.R_15_24};
`;

const PostDate = styled.span`
  height: 15px;
  background: ${({ theme }) => theme.colors.inactive_background};
  color: ${({ theme }) => theme.colors.light_green};
  border-radius: 3px;
  padding: 0.2rem 0.3rem;
  font: ${({ theme }) => theme.fonts.R_11};
`;

const PostWriterProfile = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25rem;
  height: 3.2rem;
  background: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.grey_line};
  border-radius: 3px;
  padding: 0.4rem 0.8rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
    border-radius: 50%;
  }

  h1 {
    font: ${({ theme }) => theme.fonts.SB_15};
    color: ${({ theme }) => theme.colors.black_green};
    margin-right: 0.4rem;
  }

  h2 {
    overflow: hidden;
    font: ${({ theme }) => theme.fonts.R_15};
    color: ${({ theme }) => theme.colors.bright_green};
  }
`;
