import styled from 'styled-components';
import { ReactComponent as HouseIcon } from '../../assets/icon/House.svg';

interface AddressInformationProps {
  name: string;
  phone: string;
  address: string;
}
export default function AddressInformation({ name, phone, address }: AddressInformationProps) {
  return (
    <AddressInformationContainer>
      <Title>
        <HouseIcon />
        <h1>자택 주소</h1>
      </Title>
      <UserInformation>
        <h2>{name}</h2>
        <div></div>
        <h2>{phone}</h2>
      </UserInformation>

      <UserAddress>{address}</UserAddress>
    </AddressInformationContainer>
  );
}

const AddressInformationContainer = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 17rem;
  background: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.grey_line};
  border-radius: 10px;
  padding: 2.4rem;
  margin-bottom: 3.2rem;
`;

const Title = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center

  font: ${({ theme }) => theme.fonts.SB_17};
  margin-bottom: 1.9rem;

  h1 {
    display: flex;
    align-items: center;
    margin-left: 1.8rem;
    color: ${({ theme }) => theme.colors.dark_green};
  }
`;

const UserInformation = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.middle_green};
  font: ${({ theme }) => theme.fonts.R_16};
  margin-bottom: 0.8rem;

  div {
    width: 2px;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.middle_green};
    margin: 0 0.9rem;
  }
`;

const UserAddress = styled.h2`
  color: ${({ theme }) => theme.colors.middle_green};
  font: ${({ theme }) => theme.fonts.R_16};
`;
