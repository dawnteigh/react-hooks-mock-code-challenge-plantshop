import React, { useState } from "react";

function PlantCard({ plant }) {

  const { id, name, image, price } = plant
  const [isSoldOut, setIsSoldOut] = useState(true)

  const toggleStock = () => {
    setIsSoldOut(!isSoldOut)
  }

  return (
    <li id={id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
