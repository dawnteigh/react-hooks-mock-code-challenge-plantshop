import React, { useState } from "react";

function NewPlantForm({ handleNewPlant }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        price: parseFloat(formData.price)
      })
    })
    .then(r => r.json())
    .then(data => handleNewPlant(data))
    .then(() => setFormData({
      name: "",
      image: "",
      price: ""
    }))
    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
