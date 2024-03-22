import { CartItem, Product } from '@types';
import {PropsWithChildren, createContext, useContext, useState} from 'react'
import {randomUUID} from 'expo-crypto';

type CartType = {
    item: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (ItemId: String, amount: -1 | 1) => void;
};

const CartContext = createContext<CartType>({
    item: [],
    addItem: () => {},
    updateQuantity: () => {},
});

const CartProvider = ({children}: PropsWithChildren) => {
    
    const [item, SetItems] = useState<CartItem[]>([]);
    const addItem = (product: Product, size: CartItem['size']) => {
        //check if item already as been added
        const existingItem = item.find((item) => item.product === product && item.size === size);
        
        if(existingItem) {
            updateQuantity(existingItem.id, 1) 
            return;
        }

        const newCartItem:  CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1,
        }; 
        SetItems([newCartItem, ...item])
    };
    const updateQuantity = (ItemId: String, amount: -1 | 1) => {
      const updatedItems = item.map((item) => item.id === ItemId ? {...item ,quantity: item.quantity + amount}: item).filter((item) => item.quantity > 0)
      SetItems(updatedItems);
    }; 
  return (
    <CartContext.Provider value={{item ,addItem, updateQuantity }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);