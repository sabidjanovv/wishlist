import React, {memo, useRef} from 'react'
import { PROMOCODES } from '../../static';

const Promocode = ({setPromoStatus}) => {
    const code = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      if (PROMOCODES.includes(code.current.value.toUpperCase())) {
        setPromoStatus({ msg: "Tabriklaymiz!", error: false, success: true });
      } else {
        setPromoStatus({ msg: "Promo code xato!", error: true, success: false });
      }
    //   console.log(code.current.value);
    };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center gap-2">
        <input
        ref={code}
          type="text"
          className="border w-full px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-300"
          placeholder="Enter promo code"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Apply
        </button>
      </div>
    </form>
  );
}

export default memo( Promocode)