interface TypesInfoCard{
    title:string;
    description:string;
}

function InfoCard({title, description}:TypesInfoCard){
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    );
}
export default InfoCard;