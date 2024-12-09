import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Products = ({ data, title }) => {
  const navigate = useNavigate();
  const { setWishlist, wishlist, setCart, cart } = useStateValue();


  const handleLike = (product) => {
    if (!wishlist || !Array.isArray(wishlist)) {
      console.error("Wishlist mavjud emas yoki massiv emas");
      return;
    }

    const index = wishlist.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setWishlist((prev) => [...prev, product]);
    } else {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const handleAddToCart = (product) => {
    if (!cart || !Array.isArray(cart)) {
      console.error("Cart mavjud emas yoki massiv emas");
      return;
    }

    const index = cart.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...product, amount: 1 }]);
    }
  };

  const productItems = data?.map((product) => (
    <div key={product.id} className="shadow p-3">
      <div className="w-full h-64 relative">
        <img
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full h-full object-contain"
          src={product.thumbnail}
          alt=""
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 text-xl"
          style={{ color: "green" }}
        >
          {wishlist?.some((item) => item.id === product.id) ? (
            <FaHeart style={{ color: "green" }} />
          ) : (
            <FaRegHeart style={{ color: "green" }} />
          )}
        </button>
        <button
          onClick={() => handleAddToCart(product)}
          className="absolute top-10 right-3 text-xl"
          style={{ color: "green" }} 
        >
          <IoCartOutline />
        </button>
      </div>
      <div>
        <h3>{product.title}</h3>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container">
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="grid container gap-3 grid-cols-4">{productItems}</div>
    </div>
  );
};

export default Products;
