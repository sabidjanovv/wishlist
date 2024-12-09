import React, { useEffect, useState } from "react";
import Empty from "../../components/empty/Empty";
import { useStateValue } from "../../context";
import {} from "number-brm";
import { useNavigate } from "react-router-dom";
import Promocode from "../../components/promocode/Promocode";

const Cart = () => {
  const [promoStatus, setPromoStatus] = useState({msg:"", error:false, success:false})
  console.log(promoStatus);
  const { cart, setCart } = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIncrement = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDecrement = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, amount: Math.max(item.amount - 1, 1) }
          : item
      )
    );
  };

  const handleDelete = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  

  return (
    <div className="min-h-[80vh] p-4">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
        Shopping Cart
      </h2>
      {cart.length ? (
        <div className="container flex gap-6 flex-col lg:flex-row">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4 mb-4"
              >
                <img
                  onClick={() => navigate(`/product/${item.id}`)}
                  src={item.thumbnail}
                  width={100}
                  alt={item.title}
                  className="rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {(item.price * item.amount).brm("int", 2)} $
                  </p>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-red-500 font-medium hover:text-red-600 transition"
                  >
                    Remove
                  </button>
                  <div className="border w-28 flex items-center justify-between rounded-lg mt-2 shadow-sm">
                    <button
                      onClick={() => handleDecrement(item)}
                      className="flex-1 text-lg text-gray-600 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="text-center font-semibold">
                      {item.amount}
                    </span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="flex-1 text-lg text-gray-600 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-96 border p-6 rounded-lg shadow-md bg-gray-50">
            <h3 className="font-bold text-xl mb-4 text-gray-700">
              Order Summary
            </h3>
            <p className="text-gray-500 mb-4">
              Review your items before checkout.
            </p>
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total:</span>
              <span>
                {(promoStatus.success
                  ? calculateTotal() * 0.8
                  : calculateTotal()
                ).brm()}
                $
              </span>
            </div>
            <Promocode setPromoStatus={setPromoStatus} />
            {promoStatus.error && (
              <p className="text-red-500">{promoStatus.msg}</p>
            )}
            {promoStatus.success && (
              <p className="text-green-500">{promoStatus.msg}</p>
            )}
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <Empty
          title="Savatingiz hozircha bo‘sh"
          url="https://uzum.uz/static/img/shopocat.490a4a1.png"
        />
      )}
    </div>
  );
};

export default Cart;
