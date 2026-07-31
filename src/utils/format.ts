/** Converts the API price string ("182.00000000") into a number. */
export const parsePrice = (price: string | number): number => Number(price);

/** Formats a value using the ETH convention used across the marketplace. */
export const formatEth = (value: number): string =>
  `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value)} ETH`;
