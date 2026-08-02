import type { NextApiRequest, NextApiResponse } from 'next';
import type { CartItem } from '@/types';

interface CheckoutResponse {
  orderId: string;
  total: number;
}

/** Mocked checkout endpoint used to finish the purchase flow. */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckoutResponse | { message: string }>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const items = (req.body?.items ?? []) as CartItem[];

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return res.status(201).json({ orderId: `ORD-${Date.now()}`, total });
}
