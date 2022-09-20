import React from "react";
//import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart(props) {
  return (
    <div className="m-5 px-5 w-75">
      <ShowCart
        products={props.products}
        ItemCount={props.ItemCount}
      />
  </div>
);
}

function ShowCart(props) {
    return (
    <div className="w-150">
    <h2>Your Cart Items</h2>
    {props.products.map((prod) => {
      if (prod.quantity > 0) {
        return (
          <div key={prod.id} className="border">
            <img src={prod.img} alt={prod.title} width="150" />
            <p className="qty d-inline mx-5 fw-bold">Quantity: {prod.quantity}</p>
            <p className="px-4">{prod.title}</p>
          </div>
        );
      }
    })}
    </div>
  );
}