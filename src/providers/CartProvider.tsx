import { CartItem, Product } from '@types';
import {PropsWithChildren, createContext, useContext, useState} from 'react'

type CartType = {
    item: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
};

const CartContext = createContext<CartType>({
    item: [],
    addItem: () => {},
});

const CartProvider = ({children}: PropsWithChildren) => {
    
    const [items, SetItems] = useState<CartItem[]>([]);
    const addItem = (product: Product, size: CartItem['size']) => {
        const newCartItem:  CartItem = {
            id: '1',
            product,
            product_id: product.id,
            size,
            quantity: 1,
        };
        SetItems([newCartItem, ...items])
    };
    console.log(items)
  return (
    <CartContext.Provider value={{items ,addItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);