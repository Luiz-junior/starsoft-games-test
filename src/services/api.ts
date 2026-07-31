import type { Product, ProductsResponse } from '@/types';

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'https://api-challenge.starsoft.games/api/v1';

export const PAGE_SIZE = 8;

export interface FetchProductsParams {
  page?: number;
  rows?: number;
  sortBy?: 'id' | 'name' | 'price';
  orderBy?: 'ASC' | 'DESC';
}

/**
 * GET /products?page=1&rows=8&sortBy=id&orderBy=ASC
 * All four params are required by the challenge API.
 */
export async function fetchProducts({
  page = 1,
  rows = PAGE_SIZE,
  sortBy = 'id',
  orderBy = 'ASC',
}: FetchProductsParams = {}): Promise<ProductsResponse> {
  const query = new URLSearchParams({
    page: String(page),
    rows: String(rows),
    sortBy,
    orderBy,
  });

  const response = await fetch(`${API_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products (${response.status})`);
  }

  return response.json();
}

/** The API has no detail endpoint, so the item is resolved from the list. */
export async function fetchProductById(id: number): Promise<Product | null> {
  const { count } = await fetchProducts({ page: 1, rows: PAGE_SIZE });
  const { products } = await fetchProducts({ page: 1, rows: Math.max(count, PAGE_SIZE) });
  return products.find((product) => product.id === id) ?? null;
}
