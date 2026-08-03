import styled from 'styled-components';
import { Container } from '@/components/Container';

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  gap: 48px;
  padding-top: 40px;
  padding-bottom: 80px;
  max-width: 1200px;

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

export const FigureContainer = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  max-width: 500px;
  padding: 31px;
`;

export const Figure = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  width: 100%;

  img {
    object-fit: cover;
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
  padding: 24px 0 0 24px;

  a {
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
