import React from 'react';
import styled from 'styled-components';
import Layout from 'components/common/Layout';
import PostInformation from 'components/PostInformation';
import AddressInformation from 'components/common/AddressInformation';
import { ReactComponent as CompleteIcon } from '../../assets/icon/Complete.svg';
import FullWidthButton from 'components/common/FullWidthButton';
import Title from 'components/pay/Title';
import InputButton from 'components/common/InputButton';
import Comment from 'components/common/Comment';
import WarningMessage from 'components/pay/WarningMessage';
import Infromation from 'components/common/Infromation';
import Margin from 'components/pay/Margin';

export default function PayDone() {
  const dummyPost = {
    postThumbnail:
      'https://github.com/Team-JustPay/JustPay-Release-Client/assets/62867581/6735d47e-d79d-425d-9ed0-96a58ece02bb',
    postTitle: 'NCTDREAM Best Friend Ever 포카 양도합니다 ',
    postWriter: {
      userThumbnail:
        'https://github.com/Team-JustPay/JustPay-Release-Client/assets/62867581/0debb408-1969-4372-9863-5f0ae7082f4f',
      userName: '거래계',
      userTwitterId: '@music_stars',
    },
    // postDate: '23.08.03', // 4~ 뷰에서 사용
  };

  const dummyComment = [
    { userName: '일상다반사', content: '고글 제노 포카 구매가능한가요?', index: 0 },
    { userName: '거래계', content: '아직 구매가능합니다!', index: 1 },
  ];

  return (
    <Layout>
      <MessageContainer>
        <CompleteIcon />
        <h1>안전하게 주문이 완료됐습니다!</h1>
        <p>
          배송 현황은 제시 및 구매내역에서 확인 가능합니다 <br /> 홈 혹은 프로필의 ‘우측 상단 메뉴’
        </p>
      </MessageContainer>
      <PostInformation
        postThumbnail={dummyPost.postThumbnail}
        postTitle={dummyPost.postTitle}
        postWriter={dummyPost.postWriter}
      />
      <Comment comment={dummyComment} />
      <Margin height={24} />
      <Title color={'black'} content={'결제 정보'} />
      <Infromation
        title={['판매자 정산 상태', '상품 금액']}
        content={['정산 전(배송 전)', '48000원']}
        color={['blue', 'black']}
      />
      <Title color={'black'} content={'운송장 정보'} />
      <Infromation
        title={['택배 방법', '운송장 번호']}
        content={['우체국 준등기', '판매자가 입력하기 전입니다.']}
        color={['gray', 'gray']}
      />
      <BorderLine />
      <Title color={'black'} content={'받는 사람'} />
      <AddressInformation
        name={'송우영'}
        phone={'01050312685'}
        address={'16295, 경기도 수원시 장안구 경수대로 976번길 22(수원 한일타운)'}
      />

      <Title color={'black'} content={'환불 계좌'} />
      <WarningMessage color={'gray'} text={'판매자가 운송장 입력을 10일간하지 않은 경우 환불됩니다'} />
      <FullWidthButton text={'송우영 | 우리은행 1002955768226'} color={'gray'} />
      <Title color={'black'} content={'배송 메시지 (선택)'} />
      <InputButton text={'배송 메시지 내용을 적으세요'} />
      <Margin height={64} />
    </Layout>
  );
}

const MessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 32px;
  margin-bottom: 50px;
  h1 {
    color: ${({ theme }) => theme.colors.balck_green};
    font: ${({ theme }) => theme.fonts.B_22};
    margin-top: 22px;
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.light_green};
    font: ${({ theme }) => theme.fonts.R_14};
    text-align: center;
  }
`;

const BorderLine = styled.div`
  height: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 16px -16px 3.2rem -16px;
`;
