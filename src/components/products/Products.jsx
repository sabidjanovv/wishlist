import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";

const Products = ({ data }) => {
  const { setwishlist, wishlist } = useStateValue();

  const handleLike = (product) => {
    const index = wishlist.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setwishlist((prev) => [...prev, product]);
    } else {
      setwishlist((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const productItems = data?.map((product) => (
    <div key={product.id} className="shadow p-3">
      <div className="w-full h-64 relative">
        <img
          className="w-full h-full object-contain"
          src={product.thumbnail}
          alt=""
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 text-xl text-green-500"
        >
          {wishlist?.some((item) => item.id === product.id) ? (
            <FaHeart />
          ) : 
            <FaRegHeart />
          }
        </button>
      </div>
      <div className="">
        <h3>{product.title}</h3>
      </div>
    </div>
  ));
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-10">Products</h2>
      <p className="text-center text-gray-600 mb-10">
        Order it for you or for your beloved ones
      </p>
      <div className="grid container gap-3 grid-cols-4">{productItems}</div>
    </div>
  );
};

export default Products;
