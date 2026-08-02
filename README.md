# Starsoft NFT Marketplace

Marketplace de NFTs com carrinho de compras ("Mochila de Compras"), construído em **Next.js + TypeScript** como solução para o desafio de front-end da Starsoft.

## Stack e justificativas

| Tecnologia | Uso | Por quê |
|---|---|---|
| **Next.js 14 (Pages Router)** | Framework principal | Roteamento por arquivos, rotas de API e `next/image` de forma nativa |
| **TypeScript** | Tipagem estática | Contratos explícitos da API e do estado global, menos erros em runtime |
| **Redux Toolkit** | Estado global do carrinho | Store previsível, reducers imutáveis e testes de unidade simples |
| **React Query (TanStack)** | Data fetching | `useInfiniteQuery` para o "Carregar mais", cache, retry e estados de loading/erro prontos |
| **Styled Components** | Estilização | Tema centralizado, SSR via `ServerStyleSheet` e estilos isolados por componente |
| **Framer Motion** | Animações | Entrada dos cards, hover e overlay do carrinho com efeito natural |
| **Jest + React Testing Library** | Testes | Testes centrados no comportamento do usuário |
| **Docker + Docker Compose** | Ambiente | Subida do projeto com um único comando |

## Como executar

### Docker (recomendado)

```bash
docker-compose up
```

A aplicação sobe em <http://localhost:3000> em modo desenvolvimento com hot reload (o código é montado como volume).

Para uma imagem de produção:

```bash
docker build -t starsoft-nft --target runner .
docker run -p 3000:3000 starsoft-nft
```

### Local

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
npm start        # servir o build
npm test         # testes unitários
npm run lint     # ESLint
npm run format   # Prettier
```

### Variáveis de ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `https://api-challenge.starsoft.games/api/v1` | Base da API pública do desafio |

## Funcionalidades

- **Listagem dinâmica de NFTs** consumindo a API do desafio diretamente pelo React Query.
- **Paginação "Carregar mais"** com `useInfiniteQuery` (8 itens por página) e barra de progresso laranja indicando itens carregados vs. total.
- **Carrinho de compras** completo: adicionar, remover, incrementar/decrementar quantidade, total em ETH e persistência em `localStorage`.
- **Overlay "Mochila de Compras"** em tela cheia, com botão de voltar circular, botão de deletar laranja e finalização de compra.
- **Rota de API** `/api/checkout` (finalização mockada).
- **Estados de loading, erro e vazio** tratados em todas as requisições.
- **Responsividade** de 1 a 4 colunas conforme o breakpoint.
- **SEO e acessibilidade**: `next/head` por página, HTML semântico, `aria-label` nas ações, `role="dialog"` no carrinho e foco visível.

## Convenções de estilo

Toda a estilização é feita com **styled-components**, sem CSS modules nem CSS-in-JS inline nos componentes: cada componente tem seu arquivo de estilos dedicado ao lado dele.

Estilos de páginas ficam em `src/styles/` para não interferir no roteamento por arquivos do Next.

## Estrutura

```text
src/
  components/   UI + arquivos *.styles.ts (Header, NftCard, NftGrid, OverlayCheckout, LoadMore, Footer, EthPrice...)
  hooks/        useProducts (React Query) e useCartPersistence
  pages/        Rotas do Next.js + /api/checkout
  services/     Cliente HTTP da API do desafio
  store/        Redux Toolkit (slice, selectors, hooks tipados)
  styles/       Tema, estilos globais, estilos de páginas e tipagem do styled-components
  types/        Tipos compartilhados
  utils/        Funções puras (formatação e parse de preço)
  __tests__/    Testes unitários
```

## Testes

```bash
npm test
```

Testes cobrindo o reducer do carrinho, os helpers de formatação/parse de preço, o `NftCard` (renderização + integração com o Redux) e o `OverlayCheckout` (listagem, stepper e remoção).

