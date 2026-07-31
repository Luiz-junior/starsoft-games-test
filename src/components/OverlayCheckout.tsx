import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { EthPrice } from './EthPrice';
import {
  Back,
  Empty,
  Footer,
  Head,
  Info,
  Item,
  List,
  Overlay,
  Panel,
  RemoveButton,
  Stepper,
  Thumb,
  TotalRow,
} from './OverlayCheckout.styles';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectCartIsOpen, selectCartItems, selectCartTotal } from '@/store/selectors';
import {
  clearAddedToCart,
  clearCart,
  closeCart,
  decrementItem,
  incrementItem,
  removeItem,
} from '@/store/slices/cartSlice';
import { useState } from 'react';

export function OverlayCheckout() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectCartIsOpen);
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  const [handleCheckoutClicked, setHandleCheckoutClicked] = useState(false);

  const handleCheckout = async () => {
    await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });

    setHandleCheckoutClicked(true);
    dispatch(clearCart());
    dispatch(clearAddedToCart());
    // dispatch(closeCart());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeCart())}
          />
          <Panel
            role="dialog"
            aria-modal="true"
            aria-label="Mochila de compras"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          >
            <Head>
              <Back
                type="button"
                aria-label="Fechar carrinho"
                onClick={() => dispatch(closeCart())}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M19 12H5m0 0 6-6m-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Back>
              <h2>Mochila de Compras</h2>
            </Head>

            {items.length === 0 ? (
              <Empty>Sua mochila está vazia.</Empty>
            ) : (
              <List>
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <Item
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                    >
                      <Thumb>
                        {item.image && (
                          <Image src={item.image} alt={item.name} fill sizes="161px" />
                        )}
                      </Thumb>
                      <Info>
                        <h3>{item.name}</h3>
                        {item.description && <p>{item.description}</p>}
                        <EthPrice value={item.price * item.quantity} />
                        <Stepper>
                          <button
                            type="button"
                            aria-label={`Diminuir quantidade de ${item.name}`}
                            onClick={() => dispatch(decrementItem(item.id))}
                          >
                            –
                          </button>
                          <span aria-live="polite">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label={`Aumentar quantidade de ${item.name}`}
                            onClick={() => dispatch(incrementItem(item.id))}
                          >
                            +
                          </button>
                        </Stepper>
                      </Info>
                      <RemoveButton
                        type="button"
                        aria-label={`Remover ${item.name} do carrinho`}
                        onClick={() => dispatch(removeItem(item.id))}
                        whileTap={{ scale: 0.94 }}
                      >
                        <Image
                          src="/assets/delete.svg"
                          alt=""
                          aria-hidden="true"
                          width={48}
                          height={48}
                        />
                      </RemoveButton>
                    </Item>
                  ))}
                </AnimatePresence>
              </List>
            )}

            <Footer>
              <TotalRow>
                <span>TOTAL</span>
                <EthPrice value={total} />
              </TotalRow>
              <Button
                type="button"
                $full
                disabled={items.length === 0}
                onClick={handleCheckout}
                whileTap={{ scale: 0.98 }}
                style={{ height: 81 }}
              >
                {!handleCheckoutClicked ? 'FINALIZAR COMPRA' : 'COMPRA FINALIZADA!'}
              </Button>
            </Footer>
          </Panel>
        </>
      )}
    </AnimatePresence>
  );
}
