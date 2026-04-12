Ejercicio 22. Panel de análisis de catálogo

Vas a crear una pequeña colección de datos y después construir varias operaciones sobre ella
para obtener información útil.

Puedes elegir uno de estos contextos:

    catálogo de productos;
    lista de películas;
    colección de videojuegos;
    catálogo de cursos;
    lista de libros.

Qué debes construir

Tu solución debe partir de una colección de objetos coherentes y realizar, al menos, estas
operaciones:

1. Recorrido general

Muestra un resumen legible de todos los elementos.

2. Transformación

Genera una nueva versión de la colección con algún dato adicional o adaptado.

3. Filtrado

Obtén un subconjunto según una condición.

4. Búsqueda

Encuentra un elemento concreto.

5. Validación

Comprueba:

    si existe al menos un caso que cumpla una condición;
    y si todos cumplen otra.

6. Resumen acumulado

Calcula un valor agregado con reduce() .

7. Comprobación básica

Elige una de las funciones de transformación o cálculo y verifica al menos un resultado
esperado con console.assert() .

Qué debe quedar claro en tu solución

Tu programa debe dejar visible:

    qué colección original has definido;
    qué resultados produce cada operación;
    qué función o bloque se encarga de cada parte;
    qué operación has comprobado y cuál era el resultado esperado.

Restricciones técnicas

Tu solución debe:

    usar al menos map() , filter() , find() , some() o every() , y reduce() ;
    evitar mutar innecesariamente el original;
    usar nombres claros;
    no mezclar toda la lógica en un único bloque confuso.

Criterios de calidad

Tu solución será mejor si:

    la estructura elegida tiene sentido;
    cada operación expresa bien su intención;
    distingues entre dato original y dato transformado;
    la salida permite entender qué se ha hecho en cada paso;
    la comprobación con console.assert() tiene un propósito claro.

Ampliación opcional

Si en alguna parte de tu solución tiene sentido, intenta expresar una operación mediante
encadenamiento de métodos.

Por ejemplo, podrías:

    filtrar primero una colección;
    y transformar después el resultado;
    o seleccionar una parte y preparar una versión más útil para mostrar.

Objetivo de esta ampliación

No se trata de encadenar métodos “porque sí”, sino de comprobar si en tu caso el
encadenamiento mejora la claridad de la intención.