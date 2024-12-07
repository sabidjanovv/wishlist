import React, { useRef, useState } from "react";
import { useStateValue } from "../../context";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useStateValue();
  const [submissionStatus, setSubmissionStatus] = useState(null); // User feedback

  // Redirect if cart is empty
  if (!cart?.length) {
    return <Navigate to="/cart" />;
  }

  const BOT_TOKEN = "8094110405:AAEEyem7X8OvmUAfcrOGKc_SHlcemtC8brg";
  const CHAT_ID = "-4659672814";

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: fnameRef.current.value,
      lastName: lnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
    };

    // Prepare message for Telegram
    let text = `
      🛒 *New Order Received!*\n
      - *Name:* ${formData.firstName} ${formData.lastName}\n
      - *Email:* ${formData.email}\n
      - *Phone:* ${formData.phone}\n
      - *Address:* ${formData.address}\n
      - *Cart Details:*\n
    `.trim();

    cart.forEach((product, index) => {
      text += `
        ${index + 1}. *${product.title}*\n
        - Quantity: ${product.amount}\n
        - Price: ${product.price} USD\n
      `.trim();
    });

    const total = cart.reduce((sum, item) => sum + item.amount * item.price, 0);
    text += `\n*Total Amount:* ${total} USD`;

    // Telegram API URL
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=Markdown&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        setSubmissionStatus("success");
        console.log("Order sent to Telegram successfully.");
      } else {
        setSubmissionStatus("error");
        console.error("Failed to send order to Telegram.");
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error sending order to Telegram:", error);
    }

    e.target.reset();
  };

  return (
    <div className="container mx-auto min-h-[80vh] py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Checkout</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        {/* Form Fields */}
        <div className="mb-4">
          <label
            htmlFor="fname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ismingiz:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            ref={fnameRef}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Familiyangiz:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            ref={lnameRef}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Elektron pochta:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Telefon raqami:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            ref={phoneRef}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Manzil:
          </label>
          <textarea
            id="address"
            name="address"
            ref={addressRef}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Buyurtma qabul qilish
        </button>
        {/* Feedback Messages */}
        {submissionStatus === "success" && (
          <p className="mt-4 text-green-500">Order sent successfully!</p>
        )}
        {submissionStatus === "error" && (
          <p className="mt-4 text-red-500">
            Failed to send order. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
