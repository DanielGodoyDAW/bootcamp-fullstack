interface TypesTechCard{
    name:string;
    category:string;
    description:string;
}

function TechCard({name, category, description}:TypesTechCard){
    return(
        <>
            <h1>{name}</h1>
            <p>{category}</p>
            <p>{description}</p>
        </>
    );
}
export default TechCard;