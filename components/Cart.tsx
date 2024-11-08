import React, { useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>&#36;{item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  />
                </td>
                <td>&#36;{(item.price * item.quantity).toFixed(2)}</td>
                <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total:</td>
              <td>&#36;{totalPrice.toFixed(2)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Cart;
