import Pet from "./Pet";

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map((pet) => {
        return <Pet 
        pet={pet}
        key={pet.id}
        deletePet={deletePet}/>
    })

    return ( 
        <>
            <h2>List of pets!</h2>
            {petComponents}
        </>
    );
}
 
export default PetList;