import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartIcon } from '@/components/CartIcon';
import { renderWithProviders } from '@/test/test-utils';

describe('CartIcon', () => {
  it('renders the badge with the item count', () => {
    renderWithProviders(<CartIcon count={4} onClick={() => {}} />);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('calls onClick when pressed', async () => {
    const onClick = jest.fn();
    renderWithProviders(<CartIcon count={0} onClick={onClick} />);
    await userEvent.click(
      screen.getByRole('button', { name: /abrir carrinho, 0 item/i }),
    );
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
