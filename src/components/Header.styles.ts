import styled from 'styled-components';
import Link from 'next/link';
import { Container } from './Container';

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({ theme }) => theme.colors.background};
`;

export const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100px;
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  img {
    height: 38px;
    width: auto;
  }
`;
