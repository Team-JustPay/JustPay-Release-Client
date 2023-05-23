import styled from 'styled-components';

export const Header = styled.section`
  padding: 0 1rem;
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
  width: calc(100% / 3);
  svg {
    display: block;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
`;
