const Pet = ({pet, deletePet}) => {


    const handleDeletePet = () => {
        deletePet(pet.id);
    }
    return (
        <div>
            <h4>{pet.name} the {pet.type}</h4>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years old</p>
            <button onClick={handleDeletePet}>Delete</button>
        </div>
    );
}
 
export default Pet;