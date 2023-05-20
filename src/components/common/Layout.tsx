import React, { ReactElement } from 'react';
import styled from 'styled-components';

import MainHeader from './MainHeader';

interface LayoutProps {
  children?: ReactElement[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      {/* 헤더: 확인된 헤더 종류는 2가지, 라우터 체크해서 동적으로 넣어주기 */}
      <MainHeader />
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
