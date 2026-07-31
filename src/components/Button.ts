import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'ghost';

export const Button = styled(motion.button)<{ $variant?: Variant; $full?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  height: 66px;
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  transition:
    background 0.2s ease,
    color 0.2s ease;

  ${({ $variant = 'primary', theme }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.text};

          &:hover {
            background: ${theme.colors.primaryHover};
          }
        `
      : css`
          background: transparent;
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};

          &:hover {
            border-color: ${theme.colors.primary};
            color: ${theme.colors.primary};
          }
        `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
