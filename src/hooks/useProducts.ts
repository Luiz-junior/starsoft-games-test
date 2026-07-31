import { useInfiniteQuery } from '@tanstack/react-query';
import { PAGE_SIZE, fetchProducts } from '@/services/api';

/** Paginated NFT list fetched from the challenge API on the client. */
export function useProducts() {
  const query = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam }) => fetchProducts({ page: pageParam, rows: PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      pages.length * PAGE_SIZE < lastPage.count ? pages.length + 1 : undefined,
  });

  return {
    ...query,
    products: query.data?.pages.flatMap((page) => page.products) ?? [],
    total: query.data?.pages[0]?.count ?? 0,
  };
}
