import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { NotFound } from "./NotFound";

export const Product = () => {
  let { data } = useContext(GlobalContext);
  const { catID, productID } = useParams();
  if (
    data[catID] === null ||
    data[catID] === undefined ||
    data[catID][productID] === null ||
    data[catID][productID] === undefined
  ) {
    return <NotFound />;
  }
  const { title, rate, imgSrc } = data[catID][productID];
  return (
    <div>
      {catID} {productID}
    </div>
  );
};
