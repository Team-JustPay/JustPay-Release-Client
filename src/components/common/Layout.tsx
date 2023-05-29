import React, { ReactElement } from 'react';
import styled from 'styled-components';

import FuncHeader from './header/FuncHeader';
import MainHeader from './header/MainHeader';

interface LayoutProps {
  children?: ReactElement | ReactElement[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      {/* 헤더: 확인된 헤더 종류는 2가지, 라우터 체크해서 동적으로 넣어주기 */}
      <MainHeader />
      <FuncHeader title="거래 상세 내역" leftFunc rightFunc="close" />
      <FuncHeader title="거래글" leftFunc rightFunc="more" />
      <FuncHeader title="내 정보" leftFunc rightFunc="modify" />
      {/* 메인 컨텐츠 */}
      {children}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 768px;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
`;
