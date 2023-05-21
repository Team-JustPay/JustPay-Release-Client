import React from 'react';
import styled from 'styled-components';
import { Header, HeaderSection } from './headerStyle';

import { ReactComponent as JusyPayLogo } from '../../../assets/logo/justpay_logo.svg';
import { ReactComponent as TextLogo } from '../../../assets/logo/justpay_text_logo.svg';
import { ReactComponent as DrawerLogo } from '../../../assets/logo/drawer_logo.svg';

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
