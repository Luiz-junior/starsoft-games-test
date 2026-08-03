import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoadMore } from '@/components/LoadMore';
import { renderWithProviders } from '@/test/test-utils';

describe('LoadMore', () => {
  it('reflects the loaded/total ratio in the progress bar', () => {
    renderWithProviders(<LoadMore loaded={8} total={32} onLoadMore={() => {}} />);
    const bar = screen.getByRole('progressbar', { name: /8 de 32 nfts carregados/i });
    expect(bar).toHaveAttribute('aria-valuenow', '25');
  });

  it('loads more pages on click', async () => {
    const onLoadMore = jest.fn();
    renderWithProviders(<LoadMore loaded={8} total={32} onLoadMore={onLoadMore} />);
    await userEvent.click(screen.getByRole('button', { name: 'Carregar mais' }));
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });
});
