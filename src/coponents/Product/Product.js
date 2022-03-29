import React from "react";

const Product = ({ Product, addToOrder }) => {
  const { price, pairImage, color, name } = Product;
  return (
    <div className="bg-gray-700 text-white p-4 rounded">
      <h1>Name: {name}</h1>
      <img className="w-40 mx-auto rounded-3xl py-1" src={pairImage} alt="" />
      <h1>Color: {color}</h1>
      <h1 className="my-1">Price: {price}</h1>
      <button
        onClick={() => addToOrder(Product)}
        className="w-full py-2 bg-orange-400 text-black rounded-sm"
      >
        add to card
      </button>
    </div>
  );
};

export default Product;
