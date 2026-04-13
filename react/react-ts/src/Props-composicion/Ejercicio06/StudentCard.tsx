interface TypesStudentCard{
    name:string;
    group:string;
    level:string;
}

function StudentCardA(props :TypesStudentCard) {
    return (
        <>
            <h3>Nombre: {props.name}</h3>
            <p>Grupo: {props.group}</p>
            <p>Nivel: {props.level}</p>
        </>
    );
}

function StudentCardB({ name, group, level }: TypesStudentCard) {
    return (
        <>
            <h3>Nombre: {name}</h3>
            <p>Grupo: {group}</p>
            <p>Nivel: {level}</p>
        </>
    );
}

export { StudentCardA, StudentCardB };