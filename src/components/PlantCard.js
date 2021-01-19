import React, {useState} from "react";

function PlantCard({plant, setPlants, deletePlant}) {
  const [available, setAvailable] = useState(true)

  function handleDelete () {
    fetch(`http://localhost:6001/plants/${plant.id}`, {method: "DELETE"})
    deletePlant(plant)
  }

function toggleAvailability () {
  setAvailable (available => !available)
}

  

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {available ? (
        <button className="primary" onClick = {toggleAvailability}>In Stock</button>
      ) : (
        <button onClick = {toggleAvailability}>Out of Stock</button>
      )}
           <button className="delete" onClick = {handleDelete}> Delete</button>
    </li>
  );
}

export default PlantCard;
