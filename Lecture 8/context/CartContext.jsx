import {
  createContext,
  useState,
} from "react";

export const CartContext =
  createContext();

export function CartProvider({
  children,
}) {
  const [cart, setCart] =
    useState([]);

  const addToCart = (
    product
  ) => {
    const existing =
      cart.find(
        (item) =>
          item.id === product.id
      );

    if (existing) {
      updateQuantity(
        product.id,
        existing.quantity + 1
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (
    id
  ) => {
    setCart(
      cart.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  const updateQuantity = (
    id,
    quantity
  ) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
