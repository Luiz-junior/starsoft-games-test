import styled from 'styled-components';
import { Container } from '@/components/Container';

export const Wrapper = styled(Container)`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  padding-top: 40px;
  padding-bottom: 80px;

  > * {
    flex: 1 1 calc((100% - 48px) / 2);
    min-width: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 28px;

    > * {
      flex: 1 1 auto;
      width: 100%;
    }
  }
`;

export const Figure = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;

  img {
    object-fit: contain;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: clamp(26px, 4vw, 40px);
  }

  p {
    color: ${({ theme }) => theme.colors.subtitle};
    line-height: 1.7;
  }
`;

export const Back = styled.div`
  padding-top: 24px;

  a {
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
