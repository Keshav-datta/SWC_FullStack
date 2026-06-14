import {
  useContext,
} from "react";

import {
  CartContext,
} from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useContext(
    CartContext
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>
          Cart is Empty
        </p>
      ) : (
        <>
          {cart.map(
            (item) => (
              <div
                key={
                  item.id
                }
                className="cart-item"
              >
                <h4>
                  {
                    item.name
                  }
                </h4>

                <p>
                  ₹
                  {
                    item.price
                  }
                </p>

                <input
                  type="number"
                  min="1"
                  value={
                    item.quantity
                  }
                  onChange={(
                    e
                  ) =>
                    updateQuantity(
                      item.id,
                      Number(
                        e
                          .target
                          .value
                      )
                    )
                  }
                />

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            )
          )}

          <h3>
            Total: ₹
            {
              totalPrice
            }
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
