import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useStateValue } from "../../context";
import MyLoader from "./MyLoader";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [subscription, setSubscription] = useState("one-time");
  const { wishlist, setWishlist, cart, setCart } = useStateValue();

  const handleLike = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const handleAddToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);
    if (!exists) {
      setCart((prev) => [
        ...prev,
        { ...product, amount: quantity, subscription },
      ]);
    }
  };

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          navigate("/notfound");
        }
      })
      .catch(() => navigate("/notfound"))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto py-10 grid md:grid-cols-2 gap-8">
        <MyLoader />
        <MyLoader />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 grid md:grid-cols-2 gap-8 min-h-[80vh]">
      {/* Left Section: Images */}
      <div className="flex flex-col items-center">
        <div className="border-2 border-gray-300 rounded-lg p-2">
          <img
            src={data?.images[index]}
            alt={data?.title || "Product Image"}
            className="rounded-md max-h-[400px] object-contain"
          />
        </div>
        {data?.images && data?.images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-auto">
            {data?.images?.map((url, inx) => (
              <img
                key={inx}
                onClick={() => setIndex(inx)}
                className={`w-20 h-20 object-cover cursor-pointer rounded-md transition-all duration-200 ${
                  index === inx
                    ? "border-4 border-blue-500"
                    : "border border-gray-300"
                }`}
                src={url}
                alt={data?.title || `Image ${inx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Section: Details */}
      <div className="relative p-5 shadow-md rounded-lg border border-gray-200">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          {data?.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {data?.description}
        </p>

        {/* Pricing and Subscription */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-green-500">
            ${data?.price}
          </span>
          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="subscription"
                value="one-time"
                checked={subscription === "one-time"}
                onChange={(e) => setSubscription(e.target.value)}
              />
              One-time purchase
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="radio"
                name="subscription"
                value="subscription"
                checked={subscription === "subscription"}
                onChange={(e) => setSubscription(e.target.value)}
              />
              Subscribe and delivery every
              <select
                className="ml-2 border rounded-md px-2 py-1"
                onChange={(e) => setSubscription(e.target.value)}
              >
                <option value="4 weeks">4 weeks</option>
                <option value="8 weeks">8 weeks</option>
                <option value="12 weeks">12 weeks</option>
              </select>
            </label>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gray-700">Quantity:</span>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 border rounded-md"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-3 py-1 border rounded-md"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
            <button
              onClick={() => handleLike(data)}
              className={`absolute top-3 right-3 text-2xl transition-colors duration-200 ${
                wishlist?.some((item) => item.id === data?.id)
                  ? "text-red-500 hover:text-red-600"
                  : "text-gray-400 hover:text-gray-500"
              }`}
              title="Add to Wishlist"
            >
              {wishlist?.some((item) => item.id === data?.id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>

            <button
              onClick={() => handleAddToCart(data)}
              className={`absolute top-12 right-3 text-2xl transition-colors duration-200 ${
                cart?.some((item) => item.id === data?.id)
                  ? "text-green-600"
                  : "text-gray-400 hover:text-green-600"
              }`}
              title="Add to Cart"
            >
              <IoCartOutline />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => handleAddToCart(data)}
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors block w-full text-center"
        >
          Add to Cart
        </button>

        {/* Product Details */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Details:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Warranty:</strong> {data.warrantyInformation}
            </li>
            <li>
              <strong>Shipping:</strong> {data.shippingInformation}
            </li>
            <li>
              <strong>Availability:</strong> {data.availabilityStatus}
            </li>
            <li>
              <strong>Return:</strong> {data.returnPolicy}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
