Ejercicio 16. Contador simple con closure

Crea una función llamada crearContador que devuelva otra función.
Cada vez que invoques la función devuelta, el contador debe incrementarse en una unidad.

Ejemplo orientativo

Si haces esto:

    const contar = crearContador();
    console.log(contar());
    console.log(contar());
    console.log(contar());

la salida debería ser:

    1
    2
    3

Qué trabajas

    closures;
    estado encapsulado;
    funciones que devuelven funciones.