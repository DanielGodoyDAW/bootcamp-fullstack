interface TypeModuleCard{
    name:string;
    session:number;
    level:string;
    description:string;
}

function ModuleCard({name,session,level,description}:TypeModuleCard){
    return (
        <>
            <h3>{name}</h3>
            <p>Constara de {session}</p>
            <p>Su nivel de dificultad sera {level}</p>
            <p>{description}</p>
        </>
    );
}
export default ModuleCard;