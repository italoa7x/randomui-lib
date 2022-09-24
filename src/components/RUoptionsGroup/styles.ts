import styled from 'styled-components';

interface SectionProps {
  isSelected?: boolean;
}

export const Section = styled.section<SectionProps>`
  width: 194px;
  height: 88px;
  border: 1px solid '#EB9B00';
  border-color: '#EB9B00';
  background-color: 'tomato';
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
`;
