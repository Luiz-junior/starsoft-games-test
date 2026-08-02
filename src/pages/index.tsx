import Head from 'next/head';
import { NftGrid } from '@/components/NftGrid';
import { LoadMore } from '@/components/LoadMore';
import { EmptyState, ErrorState, LoadingState } from '@/components/Feedback';
import { useProducts } from '@/hooks/useProducts';
import { Section } from '@/styles/home.styles';

export default function Home() {
  const {
    products,
    total,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useProducts();

  return (
    <>
      <Head>
        <title>Starsoft NFT Marketplace | Colecione itens épicos</title>
        <meta
          name="description"
          content="Explore e colecione NFTs de itens épicos no marketplace da Starsoft. Compre com ETH em uma experiência rápida e responsiva."
        />
        <meta property="og:title" content="Starsoft NFT Marketplace" />
        <meta
          property="og:description"
          content="Explore e colecione NFTs de itens épicos no marketplace da Starsoft."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Section as="section" aria-label="Lista de NFTs" style={{ maxWidth: 1455 }}>
        {isLoading && <LoadingState />}
        {isError && (
          <ErrorState message="Não foi possível carregar os NFTs." onRetry={refetch} />
        )}
        {!isLoading && !isError && products.length === 0 && (
          <EmptyState message="Nenhum NFT encontrado." />
        )}
        {products.length > 0 && <NftGrid products={products} />}

        {products.length > 0 && (
          <LoadMore
            loaded={products.length}
            total={total}
            isLoading={isFetchingNextPage}
            onLoadMore={() => void fetchNextPage()}
          />
        )}
      </Section>
    </>
  );
}
