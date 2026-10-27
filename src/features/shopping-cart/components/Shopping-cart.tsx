import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Laptop",
      price: 500,
      quantity: 1,
    },
    {
      id: 2,
      name: "Shoe",
      price: 200,
      quantity: 2,
    },
  ]);

  const increaseItem = (id: number) => {
    setCartItems((prevItem) =>
      prevItem.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  
  return (
    <div className="border p-4 rounded-md">
      <p className="text-center">Shopping Cart</p>

      {cartItems.map((item) => (
        <div key={item.id} className="border p-2 mt-2">
          <h2 className="font-bold">{item.name}</h2>
          <p>Price: ${item.price.toLocaleString()}</p>
          <p>Quantity: {item.quantity}</p>
          <button
            onClick={() => increaseItem(item.id)}
            className="bg-gray-300 text-black border px-2 py-1 rounded-lg hover:bg-gray-500 "
          >
            Add
          </button>
        </div>
      ))}

      <h2 className="font-bold">
        Grand Total: $ {totalPrice.toLocaleString()}
      </h2>
    </div>
  );
}
