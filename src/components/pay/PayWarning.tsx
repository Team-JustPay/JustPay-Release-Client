import FullWidthButton from 'components/common/FullWidthButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function PayWarning() {
  const navigate = useNavigate();
  return (
    <PayWarningContainer>
      <h1>결제 전 반드시 읽어주세요!</h1>
      <p>
        ㆍ결제 버튼을 누르면 아래 내용에 동의한 것으로 간주돼요. <br />
        ㆍ판매자가 수락을 하지 않으면 결제가 취소될 수 있어요. 판매자의 미수락으로 구매를 하지 못한 경우, 저스트페이에서
        책임지지 않아요. <br />
        ㆍ판매자가 수락하면 내 배송지, 연락처 정보가 판매자에게 공개돼요. 판매자가 수락을 한 이후의 개인정보 관리는
        저스트페이에서 책임지지 않아요. <br />
        ㆍ결제수단에서 토스페이를 선택하면 해외 결제가 가능해요.
      </p>
      <FullWidthButton
        text={'결제하기'}
        onClick={() => {
          navigate('/pay/done');
        }}
        color={'black'}
      />
    </PayWarningContainer>
  );
}

const PayWarningContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0px -16px 0 -16px;

  h1 {
    color: ${({ theme }) => theme.colors.middle_green};
    font: ${({ theme }) => theme.fonts.SB_17};
    margin-bottom: 1.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.light_green};
    font: ${({ theme }) => theme.fonts.R_14};
    line-height: 21px;
    margin-bottom: 2.4rem;
  }
`;
