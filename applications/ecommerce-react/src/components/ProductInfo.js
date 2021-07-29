import React from "react";

export default function ProductInfo(props) {
  return (
    <>
      <img src={props.imageUrl} alt="" />
      <h3>{props.name}</h3>
      <div>${props.price}</div>
      <p>{props.description}</p>
    </>
  );
}
