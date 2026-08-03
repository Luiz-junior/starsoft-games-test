import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState, ErrorState, LoadingState } from '@/components/Feedback';
import { renderWithProviders } from '@/test/test-utils';

describe('Feedback', () => {
  it('LoadingState announces the default label', () => {
    renderWithProviders(<LoadingState />);
    expect(screen.getByRole('status')).toHaveTextContent('Carregando NFTs...');
  });

  it('ErrorState shows the message and retries', async () => {
    const onRetry = jest.fn();
    renderWithProviders(<ErrorState message="Falhou" onRetry={onRetry} />);
    expect(screen.getByRole('alert')).toHaveTextContent('Falhou');
    await userEvent.click(screen.getByRole('button', { name: /tentar novamente/i }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('ErrorState hides the retry button without a handler', () => {
    renderWithProviders(<ErrorState message="Falhou" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('EmptyState renders the message', () => {
    renderWithProviders(<EmptyState message="Nada por aqui" />);
    expect(screen.getByText('Nada por aqui')).toBeInTheDocument();
  });
});
