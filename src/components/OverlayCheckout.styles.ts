import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 40;
`;

export const Panel = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
  height: 100dvh;
  width: 100%;
  max-width: 679px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 40px 32px;
  gap: 32px;
  overflow-y: auto;
  padding-bottom: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px 16px;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  padding-left: 32px;
  padding-top: 24px;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const Back = styled.button`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 0;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  margin-top: 136px;
`;

export const Item = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 24px;
  background: ${({ theme }) => theme.colors.surfaceCheckout};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 24px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 161px;
  flex: 0 0 161px;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};

  img {
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 96px;
    flex: 0 0 96px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1 1 0;

  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.subtitle};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Stepper = styled.div`
  margin-top: 8px;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 16px;

  button {
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    line-height: 1;
  }

  span {
    min-width: 16px;
    text-align: center;
  }
`;

export const RemoveButton = styled(motion.button)`
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 0;
  padding: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: auto;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  padding: 20px;
`;

export const Empty = styled.p`
  margin: auto 0;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.subtitle};
`;
