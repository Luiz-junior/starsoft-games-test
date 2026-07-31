import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  font-weight: 600;
`;

export const Icon = styled(Image)`
  flex-shrink: 0;
`;
