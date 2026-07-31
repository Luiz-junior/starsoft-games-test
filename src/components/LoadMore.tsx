import { Fill, MoreButton, Track, Wrapper } from './LoadMore.styles';

interface LoadMoreProps {
  loaded: number;
  total: number;
  isLoading?: boolean;
  onLoadMore: () => void;
}

/** Progress bar + "Carregar mais" pagination control. */
export function LoadMore({
  loaded,
  total,
  isLoading = false,
  onLoadMore,
}: LoadMoreProps) {
  const percent = total > 0 ? Math.min(100, Math.round((loaded / total) * 100)) : 0;

  return (
    <Wrapper>
      <Track
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label={`${loaded} de ${total} NFTs carregados`}
      >
        <Fill animate={{ width: `${percent}%` }} transition={{ duration: 0.4 }} />
      </Track>
      <MoreButton type="button" onClick={onLoadMore} whileTap={{ scale: 0.99 }}>
        {percent < 100 ? 'Carregar mais' : 'Você já viu tudo'}
      </MoreButton>
    </Wrapper>
  );
}
