import { useEffect, useState } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const PetContainer = () => {
    
    const [pets, setPets] = useState([]);

    const loadPetData = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const jsonData = await response.json();
        setPets(jsonData);
    }

    useEffect(() => {
        loadPetData();
    }, [])


    const postPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPet)
        })
        const savedPet = await response.json();
        setPets([...pets, savedPet])
    }


    const deletePet = async (id) => {
        await fetch("http://localhost:8080/pets/" + id, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        setPets(pets.filter(pet => pet.id !== id))
    }

    return (
        <>
            <h1>Pet Container!</h1>
            <PetForm postPet={postPet}/>
            <PetList pets={pets} deletePet={deletePet}/>
        </> 
     );
}
 
export default PetContainer;