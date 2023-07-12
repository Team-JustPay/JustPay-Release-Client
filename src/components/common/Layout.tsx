import React, { ReactElement } from 'react';
import styled from 'styled-components';

import FuncHeader from './header/FuncHeader';
import MainHeader from './header/MainHeader';

import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children?: ReactElement | ReactElement[];
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <Container>
      {/* 헤더: 확인된 헤더 종류는 2가지, 라우터 체크해서 동적으로 넣어주기 */}
      {location.pathname === '/' && <MainHeader />}
      {location.pathname.includes('/done') && <FuncHeader rightFunc="close" />}
      {location.pathname.match(/pay(?!.*done)/) && <FuncHeader title="저스트페이 안전결제" leftFunc={true} />}

      <BottomLine />
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
  padding: 0 16px;
`;

const BottomLine = styled.div`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.light_green};
  margin: 0 -16px;
`;
