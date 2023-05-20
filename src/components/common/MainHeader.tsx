import React from 'react';
import styled from 'styled-components';

import { ReactComponent as JusyPayLogo } from '../../assets/logo/justpay_logo.svg';
import { ReactComponent as TextLogo } from '../../assets/logo/justpay_text_logo.svg';
import { ReactComponent as DrawerLogo } from '../../assets/logo/drawer_logo.svg';

export default function MainHeader() {
  return (
    <Header>
      <HeaderSection>
        <JusyPayLogo />
        <TextLogo />
      </HeaderSection>
      <HeaderSection>
        <DrawerLogo />
      </HeaderSection>
    </Header>
  );
}

const Header = styled.section`
  padding: 0 1rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const HeaderSection = styled.section`
  display: flex;
  svg {
    display: block;
    height: 50px;
    line-height: 50px;
  }
`;
