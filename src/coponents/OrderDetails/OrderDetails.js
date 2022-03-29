import React from "react";

const OrderDetails = ({ product }) => {
    const {name, pairImage, price} = product
  return (
    <div className="flex items-center justify-around bg-slate-300 text-black px-5 w-3/4 mx-auto rounded-lg my-2">
      <div>
          <img className="w-16 rounded-full" src={pairImage} alt="" />
      </div>
      <div>
          <h1>{name}</h1>
          <h1>{price}$</h1>
      </div>
    </div>
  );
};

export default OrderDetails;
