import { formatEth, parsePrice } from '@/utils/format';

describe('format helpers', () => {
  it('parses API price strings', () => {
    expect(parsePrice('182.00000000')).toBe(182);
  });

  it('formats values with the ETH suffix', () => {
    expect(formatEth(182)).toContain('ETH');
  });
});
