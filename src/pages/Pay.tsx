import React from 'react';
import Layout from 'components/common/Layout';
import PayWarning from 'components/pay/PayWarning';
import AddressInformation from 'components/common/AddressInformation';
import styled from 'styled-components';

export default function Pay() {
  return (
    <Layout>
      <Title>결제 예정 금액</Title>
      <BorderLine />
      <Title>받는 사람</Title>
      <AddressInformation
        name={'송우영'}
        phone={'01050312685'}
        address={'16295, 경기도 수원시 장안구 경수대로 976번길 22(수원 한일타운)'}
      />
      <Title>환불 계좌</Title>
      <Title>배송 방법</Title>
      <Title>배송 메시지 (선택)</Title>
      <Title>배송 수단</Title>
      <Title>결제 금액</Title>
      <PayWarning />
    </Layout>
  );
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black_green};
  font: ${({ theme }) => theme.fonts.B_22};
  margin-bottom: 3.2rem;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 3.2rem;
`;
