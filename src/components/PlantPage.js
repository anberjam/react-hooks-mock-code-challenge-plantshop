import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(plantsData => setPlants(plantsData))
    }, [])
  

  function addNewPlant (newPlant) {
    const updatedPlants =[...plants, newPlant]
    setPlants(updatedPlants)
  }

  function deletePlant (plantToDelete) 
  {const updatedPlants = plants.filter((plant) => plant.id !== plantToDelete.id)
  setPlants(updatedPlants)
  }

  const plantsToDisplay = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  

  return (
    <main>
      <NewPlantForm addNewPlant = {addNewPlant}/>
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <PlantList plants = {plantsToDisplay} setPlants = {setPlants} deletePlant = {deletePlant}/>
    </main>
  );
}

export default PlantPage;
