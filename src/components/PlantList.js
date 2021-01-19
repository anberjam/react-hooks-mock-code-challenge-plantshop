import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, deletePlant}) {
  const renderPlantCards = plants.map((plant) => 
    <PlantCard key = {plant.id} plant = {plant} setPlants = {setPlants} deletePlant = {deletePlant}/>
  )
  return (

    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;
