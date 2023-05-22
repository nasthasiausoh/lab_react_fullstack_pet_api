import { useState } from "react";

const PetForm = ({postPet}) => {
    
    const [newPet, setNewPet] = useState({
        name: "",
        age: 0,
        type: "",
        breed: ""
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting pet");
        postPet(newPet)
    }
    
    return ( 
        <>
            <h2>Add a new pet!</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-element">
                    <label htmlFor="name">Pet's name:</label>
                    <input
                     type="text" 
                     id="name" 
                     value={newPet.name} 
                     onChange={(e) => {setNewPet({...newPet, name: e.target.value})}}/>
                </div>
                <div className="form-element">
                    <label htmlFor="age">How old are they?</label>
                    <input 
                    type="number" 
                    id="age" 
                    min="0" 
                    value={newPet.age} 
                    onChange={(e) => {setNewPet({...newPet, age: e.target.value})}}/>
                </div>
                <div className="form-element">
                    <label htmlFor="type">What type of animal are they?</label>
                    <input 
                    type="text"
                    id="type"
                    value={newPet.type} 
                    onChange={(e) => {setNewPet({...newPet, type: e.target.value})}}/>
                </div>
                <div className="form-element">
                    <label htmlFor="breed">What breed are they?</label>
                    <input 
                     type="text" 
                     id="breed" 
                     value={newPet.breed} 
                     onChange={(e) => {setNewPet({...newPet, breed: e.target.value})}}/>
                </div>
                <input 
                type="submit" value="Add Pet"/>
                <hr/>
            </form>
        </>
    );
}
 
export default PetForm;