import { Box, Spinner } from './Feedback.styles';

export function LoadingState({ label = 'Carregando NFTs...' }: { label?: string }) {
  return (
    <Box role="status" aria-live="polite">
      <Spinner />
      <span>{label}</span>
    </Box>
  );
}

export function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <Box role="alert">
      <span>{message}</span>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          Tentar novamente
        </button>
      )}
    </Box>
  );
}

export function EmptyState({ message }: { message: string }) {
  return <Box>{message}</Box>;
}
