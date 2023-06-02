import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from 'phosphor-react';
import camisa1 from '../../assets/1.png';
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';
import { useCart } from '@/hooks/useCart';

export function Cart(){
    const { cartItems } = useCart()
    const cartQuantity = cartItems.length

    return (
        <Dialog.Root>
           <Dialog.Trigger asChild>
                <CartButton />
           </Dialog.Trigger> 
           <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} weight='bold'/>
                    </CartClose>

                    <h2>Sacola de compras</h2>

                    <section>
                        {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio : (</p>}

                        {cartItems.map((cartItem) => {
                            return (
                                <CartProduct key={cartItem.id}>
                                    <CartProductImage>
                                        <Image src={cartItem.imageUrl} width={100} height={93} alt=""/>
                                    </CartProductImage>
                                    <CartProductDetails>
                                        <p>{cartItem.name}</p>
                                        <strong>{cartItem.price}</strong>
                                        <button onClick={() => console.log("Remover")}>Remover</button>
                                    </CartProductDetails>
                                </CartProduct>
                                )
                            })
                        }
                    </section>
                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>{cartQuantity} {cartQuantity > 1 ? 'itens' : 'item'}</p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>R$ 100,00</p>
                            </div>
                        </FinalizationDetails>
                        <button>Finalizar compra</button>
                    </CartFinalization>
                </CartContent>
           </Dialog.Portal>
        </Dialog.Root>
    )
    
}