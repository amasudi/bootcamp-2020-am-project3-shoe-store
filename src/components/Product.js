import React from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { productID } = useParams();
  return <div>{productID}</div>;
};
