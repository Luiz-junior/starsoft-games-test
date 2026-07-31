import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.button)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
`;

export const Badge = styled.span`
  min-width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
`;
