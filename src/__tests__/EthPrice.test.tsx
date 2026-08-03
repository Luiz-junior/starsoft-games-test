import { screen } from '@testing-library/react';
import { EthPrice } from '@/components/EthPrice';
import { renderWithProviders } from '@/test/test-utils';

describe('EthPrice', () => {
  it('formats the value with the ETH suffix', () => {
    renderWithProviders(<EthPrice value={182} />);
    expect(screen.getByText(/182 ETH/)).toBeInTheDocument();
  });

  it('renders the Ethereum badge as decorative with the given size', () => {
    renderWithProviders(<EthPrice value={1.5} size={40} />);
    const icon = document.querySelector('img[aria-hidden="true"]') as HTMLImageElement;
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '40');
  });
});
