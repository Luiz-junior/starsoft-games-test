import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { EthPrice } from '@/components/EthPrice';
import { ErrorState, LoadingState } from '@/components/Feedback';
import { fetchProductById } from '@/services/api';
import { parsePrice } from '@/utils/format';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addItem, selectAddedToCartIds } from '@/store/slices/cartSlice';
import { Back, Figure, FigureContainer, Info, Wrapper } from '@/styles/nft-detail.styles';

export default function NftDetail() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const addedToCartIds = useAppSelector(selectAddedToCartIds);
  const id = Number(router.query.id);

  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: Number.isInteger(id),
  });

  const price = product ? parsePrice(product.price) : 0;

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        price,
      }),
    );
  };

  return (
    <>
      <Head>
        <title>{`${product?.name ?? 'NFT'} | Starsoft NFT Marketplace`}</title>
        <meta
          name="description"
          content={product?.description.slice(0, 155) ?? 'Detalhes do NFT.'}
        />
        <meta
          property="og:title"
          content={`${product?.name ?? 'NFT'} | Starsoft NFT Marketplace`}
        />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Container>
        <Back>
          <Link href="/">&larr; Voltar para a coleção</Link>
        </Back>
      </Container>

      {isLoading && <LoadingState label="Carregando NFT..." />}
      {isError && (
        <ErrorState message="Não foi possível carregar este NFT." onRetry={refetch} />
      )}
      {!isLoading && !isError && !product && <ErrorState message="NFT não encontrado." />}

      {product && (
        <Wrapper as="article">
          <FigureContainer>
            <Figure>
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                  fill
                />
              )}
            </Figure>
          </FigureContainer>
          <Info>
            <h1>{product.name}</h1>
            <EthPrice value={price} />
            <p>{product.description}</p>
            <Button type="button" onClick={handleAddToCart} whileTap={{ scale: 0.97 }}>
              {addedToCartIds.includes(product.id) ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
            </Button>
          </Info>
        </Wrapper>
      )}
    </>
  );
}
