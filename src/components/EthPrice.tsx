import { Icon, Wrapper } from './EthPrice.styles';
import { formatEth } from '@/utils/format';

interface EthPriceProps {
  value: number;
  className?: string;
  size?: number;
}

export function EthPrice({ value, className, size = 29 }: EthPriceProps) {
  return (
    <Wrapper className={className}>
      <Icon src="/assets/eth.svg" alt="" aria-hidden="true" width={size} height={size} />
      {formatEth(value)}
    </Wrapper>
  );
}
