import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(r => r.json())
  .then(data => setPlants(data))
  .catch(err => alert("Whoopsy daisy"))
}, [])

const handleNewPlant = (newPlant) => {
  const updatedPlants = [...plants, newPlant]
  setPlants(updatedPlants)
}

const handleSearch = (e) => {
  setSearch(e.target.value)
}

const filteredPlants = plants.filter(plant => {
  if (search === "") return true
  return plant.name.toLowerCase().includes(search.toLowerCase())})

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
