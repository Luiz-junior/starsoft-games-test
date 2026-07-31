import styled from 'styled-components';

const GAP = 24;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${GAP}px;
  margin-top: 180px;

  > li {
    display: flex;
    flex: 0 0 calc((100% - ${GAP * 3}px) / 4);
    max-width: calc((100% - ${GAP * 3}px) / 4);
  }

  > li > * {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    > li {
      flex-basis: calc((100% - ${GAP * 2}px) / 3);
      max-width: calc((100% - ${GAP * 2}px) / 3);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    > li {
      flex-basis: calc((100% - ${GAP}px) / 2);
      max-width: calc((100% - ${GAP}px) / 2);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    > li {
      flex-basis: 100%;
      max-width: 100%;
      justify-content: center;
    }
  }
`;
