import styled from 'styled-components';
import { Container } from './Container';

export const Bar = styled.footer`
  height: 76px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 14px;

  margin-top: 120px;
`;

export const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  > span {
    font-size: 14px;
    font-weight: 400;
  }
`;
