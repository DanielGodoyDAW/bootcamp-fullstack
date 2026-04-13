Ejercicio 11. Diseñar un componente contenedor reutilizable

Crea un componente SectionBlock que tenga:

    un título recibido por prop;
    una zona interior renderizada con children .

Después úsalo para construir una página con tres bloques:

    “Qué aprenderás”
    “Herramientas”
    “Recomendaciones iniciales”

Objetivo

Practicar una combinación muy útil:

    datos configurables por props;
    contenido flexible mediante children .

Criterios de calidad

El ejercicio estará bien resuelto si:

    SectionBlock puede reutilizarse de verdad;
    el título se pasa por prop;
    el contenido interno se pasa con children ;
    el resultado es limpio y legible.