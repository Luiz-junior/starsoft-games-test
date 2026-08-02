import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  max-width: 403px;
  margin: 200px auto 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Track = styled.div`
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
`;

export const Fill = styled(motion.div)`
  height: 100%;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const MoreButton = styled(motion.button)`
  width: 100%;
  height: 86px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
