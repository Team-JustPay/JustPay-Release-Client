import styled from 'styled-components';

interface InfromationProps {
  title: string[];
  content: string[];
  color: string[];
}

export default function Infromation({ title, content, color }: InfromationProps) {
  return (
    <>
      {title.map((value, index) => {
        return (
          <InfromationContainer key={index} color={color[index]}>
            <h1>{value}</h1>
            <p>{content[index]}</p>
          </InfromationContainer>
        );
      })}
    </>
  );
}

const InfromationContainer = styled.section<{ color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3.2rem;

  h1 {
    color: ${({ theme }) => theme.colors.light_green};
    font: ${({ theme }) => theme.fonts.M_17};
  }

  p {
    color: ${({ color }) => (color === 'gray' ? '#9BA3A2' : color === 'blue' ? '#3674FF' : '#2A3E3B')};
    font: ${({ theme }) => theme.fonts.M_17};
  }
`;
