Ejercicio 21. Modelado de un catálogo académico o de ocio

Vas a crear una pequeña estructura de datos que represente un catálogo. Puedes elegir uno de estos contextos:

    catálogo de cursos;
    catálogo de videojuegos;
    catálogo de películas;
    catálogo de herramientas de desarrollo;
    catálogo de libros.

Qué debes construir

1. Una colección principal

Debe ser un array de objetos.

2. Cada objeto debe incluir al menos:

    id
    nombre o titulo
    una propiedad numérica
    una propiedad booleana
    una propiedad anidada u otra estructura complementaria

3. Operaciones obligatorias

Debes realizar, al menos, estas acciones:

    mostrar el catálogo completo;
    acceder a un dato anidado concreto;
    desestructurar al menos una parte del dato;
    crear una copia modificada de uno de los elementos usando spread ;
    usar optional chaining o nullish coalescing en algún acceso;
    convertir la colección a JSON y reconstruirla.

Salida orientativa

No se espera una salida única, pero sí que el programa muestre mensajes claros que permitan entender:

    qué datos contiene la colección;
    qué elemento estás consultando;
    qué copia has generado;
    qué resultado obtienes tras convertir a JSON y volver a parsear.

Restricciones técnicas

Tu solución debe:

    usar nombres claros y coherentes;
    evitar estructuras ambiguas;
    no usar todavía métodos avanzados de arrays como eje central del ejercicio;
    dejar visible que has pensado el modelado antes de programar.

Criterios de calidad

Tu solución será mejor si:

    la estructura elegida tiene sentido con el problema;
    las propiedades son consistentes entre objetos;
    el acceso a los datos resulta claro;
    distingues bien entre colección y entidad;
    la salida por consola ayuda a comprender la estructura creada.