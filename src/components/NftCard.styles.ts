import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 56px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 30px;

  width: 100%;
  max-width: 345px;
`;

export const Thumb = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  height: 258px;
  width: 100%;

  img {
    object-fit: cover;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.subtitle};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;
