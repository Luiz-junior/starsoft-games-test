import { screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';
import { renderWithProviders } from '@/test/test-utils';

describe('Footer', () => {
  it('renders the rights reserved text with the current year', () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`STARSOFT © ${year} TODOS OS DIREITOS RESERVADOS.`),
    ).toBeInTheDocument();
  });
});
