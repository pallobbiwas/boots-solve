import React, { useEffect, useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [random, setRendom] = useState([]);
  const [ofer, setOfer] = useState(false);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    if (product.length > 0) {
      setOfer(true);
    }
  }, [product]);

  const addToOrder = (name) => {
    const newOrder = [...product, name];
    if (product.indexOf(name) === -1) {
      setProduct(newOrder);
    }
  };

  //random genaretor
  const freeHandeler = () => {
    const randomNumber = Math.round(Math.random() * products.length);
    setRendom(products[randomNumber]);
  };

  return (
    <div className="grids gap-4 my-4">
      <div className="grid grid-cols-3 gap-3">
        {products.map((Pro) => (
          <Product key={Pro.id} Product={Pro} addToOrder={addToOrder}></Product>
        ))}
      </div>
      <div className="bg-indigo-900 text-white">
        <h1>Your order</h1>
        {product.map((p) => (
          <OrderDetails key={p.id} product={p}></OrderDetails>
        ))}
        <button
          onClick={freeHandeler}
          className={ofer ? 'w-3/4 mx-auto py-2 bg-orange-400  text-black rounded-sm' : 'hidden'} disabled ={!ofer}
        >
          Bye one free
        </button>
        {Object.keys(random).length > 0 && (
          <div className="bg-slate-500 flex items-center p-2 mt-2 w-3/4 mx-auto">
            <img
              className="w-10 rounded-xl mr-20"
              src={random.pairImage}
              alt=""
            />
            <h2>{random.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
