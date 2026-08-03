import { API_URL, PAGE_SIZE, fetchProductById, fetchProducts } from '@/services/api';

const product = { id: 2, name: 'Sword', description: 'Espada.', price: '10.00000000' };

function mockJson(payload: unknown, ok = true, status = 200) {
  return { ok, status, json: async () => payload } as Response;
}

describe('services/api', () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  it('sends page, rows, sortBy and orderBy on every request', async () => {
    fetchMock.mockResolvedValue(mockJson({ products: [product], count: 1 }));
    await fetchProducts();
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/products?page=1&rows=${PAGE_SIZE}&sortBy=id&orderBy=ASC`,
    );
  });

  it('forwards custom params', async () => {
    fetchMock.mockResolvedValue(mockJson({ products: [], count: 0 }));
    await fetchProducts({ page: 3, rows: 12, sortBy: 'price', orderBy: 'DESC' });
    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}/products?page=3&rows=12&sortBy=price&orderBy=DESC`,
    );
  });

  it('resolves a single product from the full list', async () => {
    fetchMock
      .mockResolvedValueOnce(mockJson({ products: [], count: 20 }))
      .mockResolvedValueOnce(mockJson({ products: [product], count: 20 }));

    await expect(fetchProductById(2)).resolves.toMatchObject({ id: 2, name: 'Sword' });
    expect(fetchMock).toHaveBeenLastCalledWith(
      `${API_URL}/products?page=1&rows=20&sortBy=id&orderBy=ASC`,
    );
  });

  it('returns null for an unknown id', async () => {
    fetchMock.mockResolvedValue(mockJson({ products: [product], count: 8 }));
    await expect(fetchProductById(999)).resolves.toBeNull();
  });
});
