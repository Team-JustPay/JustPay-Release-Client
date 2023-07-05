import React from 'react';
import styled from 'styled-components';
import Layout from 'components/common/Layout';
import PostInformation from 'components/PostInformation';
import AddressInformation from 'components/common/AddressInformation';
import PayWarning from 'components/pay/PayWarning';
import FullWidthButton from 'components/common/FullWidthButton';
import Title from 'components/pay/Title';
import InputButton from 'components/common/InputButton';
import Comment from 'components/common/Comment';

export default function Pay() {
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
      <PostInformation
        postThumbnail={dummyPost.postThumbnail}
        postTitle={dummyPost.postTitle}
        postWriter={dummyPost.postWriter}
      />
      <Comment comment={dummyComment} />
      <TotalPay>
        <Title color={'black'} content={'결제 예정 금액'} />
        <Title color={'blue'} content={'48000원'} />
      </TotalPay>
      <BorderLine />
      <Title color={'black'} content={'받는 사람'} />
      <AddressInformation
        name={'송우영'}
        phone={'01050312685'}
        address={'16295, 경기도 수원시 장안구 경수대로 976번길 22(수원 한일타운)'}
      />
      <Title color={'black'} content={'환불 계좌'} />
      <FullWidthButton text={'송우영 | 우리은행 1002955768226'} color={'gray'} />
      <Title color={'black'} content={'베송 방법'} />
      <FullWidthButton text={'우체국 택배 2400원'} color={'gray'} />
      <Title color={'black'} content={'배송 메시지 (선택)'} />
      <InputButton text={'배송 메시지 내용을 적으세요'} />
      <Title color={'black'} content={'결제 수단'} />
      <FullWidthButton text={'무통장 입금'} color={'justGreen'} />
      <Title color={'black'} content={'결제 금액'} />
      <PayWarning />
    </Layout>
  );
}

const TotalPay = styled.article`
  display: flex;
  justify-content: space-between;
`;

const BorderLine = styled.div`
  height: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 16px -16px 3.2rem -16px;
`;
