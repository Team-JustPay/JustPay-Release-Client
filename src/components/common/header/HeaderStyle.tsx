import styled from 'styled-components';

export const Header = styled.section`
  padding: 0 1.6rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section:last-child {
    svg,
    p {
      margin-left: auto;
    }
  }
`;

export const HeaderSection = styled.section`
  display: flex;
  svg {
    display: block;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
`;
