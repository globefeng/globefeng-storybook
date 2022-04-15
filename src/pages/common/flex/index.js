import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const FlexRowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 300px) {
    flex-direction: column;
  }
`;