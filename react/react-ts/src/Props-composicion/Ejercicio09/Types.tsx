interface TypesTargetCurso{
    name:string;
    level:string;
    duration:string;
    modality:string;
    text:string;
}

interface TypesCatalogo{
    title:string;
    description:string;
    collection:TypesTargetCurso[];
}

export type {TypesTargetCurso, TypesCatalogo};