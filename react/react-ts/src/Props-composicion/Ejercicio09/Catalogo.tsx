import TargetCurso from "./TargetCurso";

import type { TypesCatalogo } from "./Types";

function Catalogo({title, description, collection}:TypesCatalogo){
    return (
        <div className="catalogo">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="cursos">
                {collection.map((col) => (
                    <TargetCurso {...col} />
                ))}
            </div>
        </div>
    );
}
export default Catalogo;