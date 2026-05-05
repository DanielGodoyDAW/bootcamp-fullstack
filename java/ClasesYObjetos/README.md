## Clases, objetos, encapsulación y modelos de dominio

# 1. Propósito

En esta hoja vas a practicar el paso de programas basados en variables y métodos sueltos a programas organizados mediante clases y objetos.

Trabajarás:

    creación de clases;
    creación de objetos con new ;
    atributos privados;
    constructores;
    uso de this ;
    encapsulación;
    getters y setters;
    validación dentro de clases;
    métodos de comportamiento;
    toString() ;
    relaciones entre clases;
    diferencia entre clase de dominio, DTO, record , JavaBean y Entity conceptual;
    responsabilidad de las clases.

# 2. Entrega mínima

Debes entregar un pequeño proyecto Java o conjunto de archivos .java que incluya, como mínimo:

1. Una clase Main para probar el programa.
2. Al menos dos clases de dominio.
3. Atributos private .
4. Constructores con parámetros.
5. Uso correcto de this .
6. Getters necesarios.
7. Setters solo cuando tengan sentido.
8. Al menos una validación dentro de una clase.
9. Al menos un método de comportamiento.
10. Al menos un método que calcule o derive información.
11. toString() sobrescrito en alguna clase.
12. Una relación entre clases.
13. Nombres claros y convenciones Java.
14. Código que compile y pueda ejecutarse.

## Errores frecuentes

Evita estos errores:

    resolverlo todo con variables sueltas en main ;
    usar atributos públicos;
    crear setters para todo sin pensar;
    no validar datos en constructores o métodos;
    usar setEstado("...") para cualquier cambio de estado;
    crear clases sin comportamiento cuando representan dominio;
    hacer que una clase haga demasiadas cosas;
    olvidar toString() ;
    comparar objetos con == esperando igualdad de contenido;
    confundir DTO con modelo de dominio;
    usar record para una clase que necesita cambiar de estado;
    crear nombres poco claros como Datos , Gestor , Cosa , Objeto1 ;
    mezclar impresión, validación, persistencia y lógica de negocio en una sola clase.

##  Ejercicios recomendados y evaluables

    2, 3, 4, 6 y 7.

## Índice

- [Ejercicio01](./Ejercicio01)
- [Ejercicio02](./Ejercicio02)
- [Ejercicio03](./Ejercicio03)
- [Ejercicio04](./Ejercicio04)
- [Ejercicio05](./Ejercicio05)
- [Ejercicio06](./Ejercicio06)
- [Ejercicio07](./Ejercicio07)
- [Ejercicio08](./Ejercicio08)