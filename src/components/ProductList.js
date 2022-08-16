import React from "react";
import Product from "./Product.js";

export default function product(props) {
  return(props.productList.length>0?
  props.productList.map((product, ind) => {
    return (
      <Product
        product={product}
        key={ind}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        index={ind}
        removeItem={props.removeItem}
      />
    );
  }):<h1>Please add some product in cart</h1>)
}
