# POO Avanzada – Gestión de incidencias técnicas

Modalidad de trabajo
Esta práctica debe realizarse en grupo.

El grupo deberá:
    organizar el trabajo internamente;
    repartir tareas;
    revisar conjuntamente las decisiones de diseño;
    justificar la arquitectura elegida;
    entregar una única solución final.

## 1. Propósito de la hoja

En esta práctica trabajarás el paso desde una aplicación orientada a objetos básica hacia una
aplicación backend más organizada y desacoplada.
El objetivo principal no es construir una aplicación compleja, sino diseñar una solución con
responsabilidades separadas y decisiones de diseño razonadas.
Durante el ejercicio deberás aplicar conceptos vistos en la sesión:

    encapsulación;
    composición;
    polimorfismo;
    abstracciones e interfaces;
    separación de responsabilidades;
    desacoplamiento;
    cohesión;
    organización por capas;
    servicios;
    persistencia en memoria;
    principios SOLID aplicados de forma práctica.

## 2. Contexto del ejercicio

Una empresa necesita una pequeña aplicación de consola para gestionar incidencias técnicas
comunicadas por usuarios internos.

Cada incidencia debe poder:

    identificarse;
    describir el problema;
    tener prioridad;
    tener estado;
    asignarse a una persona responsable;
    evolucionar a lo largo del tiempo.

La aplicación debe permitir registrar incidencias, consultarlas, gestionarlas y mostrar
información por consola.

El dominio del ejercicio es único y obligatorio:

    Gestión de incidencias técnicas

No deben utilizarse otros dominios alternativos.

## 3. Objetivo técnico

La solución debe construirse aplicando una arquitectura organizada por responsabilidades.

La aplicación debe diferenciar claramente:

    - modelo;
    - acceso a datos;
    - lógica de negocio;
    - arranque de la aplicación.

La organización del proyecto debe usar obligatoriamente los siguientes paquetes:

    com.bootcamp.back06
    ├──app
    ├──model
    ├──repository
    ├──service

Cada grupo decidirá:

    qué clases necesita;
    qué nombres utilizar;
    qué relaciones existen entre ellas;
    qué métodos necesita cada clase;
    cómo distribuir responsabilidades.

## 4. Requisitos funcionales

La aplicación debe permitir, como mínimo:

1. Registrar incidencias.
2. Registrar personas responsables de gestionarlas.
3. Asignar incidencias.
4. Cambiar estados de incidencias.
5. Consultar incidencias registradas.
6. Mostrar incidencias abiertas.
7. Simular varios casos de uso desde Main .
8. Mostrar información por consola.

La solución debe incluir distintos estados posibles para una incidencia.

Como mínimo deben existir estados equivalentes a:

    abierta
    asignada
    en proceso
    resuelta
    cerrada

La aplicación también debe permitir representar distintos niveles de prioridad.

Como mínimo deben existir prioridades equivalentes a:

    baja
    media
    alta
    crítica

El grupo puede decidir cómo modelar internamente estos conceptos.

## 5. Restricciones técnicas

### 5.1. Persistencia en memoria

La persistencia debe resolverse exclusivamente mediante:

    arrays tradicionales

No deben utilizarse colecciones de Java.

No está permitido usar:

    ArrayList
    List
    LinkedList
    HashMap
    HashSet
    Collections
    Stream API

El grupo deberá gestionar manualmente:

    almacenamiento;
    posiciones ocupadas;
    búsquedas;
    recuperación de elementos.

### 5.2. Diseño y arquitectura

La solución no debe:

    concentrar toda la lógica en una única clase;
    mezclar almacenamiento y lógica de negocio;
    crear dependencias excesivamente rígidas;
    utilizar herencia sin sentido desde el dominio;
    crear clases o interfaces sin responsabilidad clara;
    resolver toda la lógica desde Main .

## 6. Requisitos de diseño

La solución debe demostrar comprensión práctica de varios conceptos trabajados durante la sesión.

Entre ellos:

    encapsulación;
    composición;
    cohesión;
    reducción de acoplamiento;
    separación de responsabilidades;
    organización por capas;
    abstracciones cuando aporten valor;
    principios SOLID aplicados de forma razonada.

 El grupo deberá tomar decisiones de diseño justificadas y coherentes con el problema
planteado.

## 7. Simulación mínima esperada

La aplicación debe incluir una simulación funcional desde Main .

Como mínimo, debe poder observarse:

    creación de datos;
    registro de incidencias;
    asignaciones;
    cambios de estado;
    consultas;
    salida de información por consola.

La simulación debe permitir comprobar que la arquitectura funciona correctamente.

## 8. Entrega

Cada grupo deberá entregar:

1. Proyecto Java completo.
2. Captura o salida de consola de la ejecución.
3. Archivo README.md .

 El README.md debe incluir:

    integrantes del grupo;
    explicación general de la arquitectura;
    responsabilidades de las clases principales;
    decisiones de diseño relevantes;
    dificultades encontradas;
    posibles mejoras futuras.

## 9. Criterios de calidad

Antes de entregar, revisa:

 

| Criterio | Pregunta de comprobación | 
|:-------------|:------------:|
| Organización      | ¿El código está separado por responsabilidades?    |
| Modelo     |¿Las clases representan correctamente el dominio?|
| Cohesión   |¿Cada clase tiene una responsabilidad clara?|
| Acoplamiento     |¿Las dependencias son razonables?|
| Arquitectura     |¿Existe separación entre almacenamiento y lógica?|
| Persistencia     |¿El almacenamiento usa arrays tradicionales?|
| Main     |¿ Main solo coordina la simulación?|
| Diseño     |¿Las decisiones tienen sentido desde el dominio?|
| Código     |¿Compila y se ejecuta correctamente?|
| README     |¿El grupo justifica el diseño realizado?|

## 10. Reflexión final

El objetivo de esta práctica no es únicamente que el código funcione.

La intención es empezar a construir aplicaciones que:

    puedan crecer;
    puedan mantenerse;
    puedan modificarse;
    y tengan responsabilidades separadas.

Este ejercicio prepara la transición hacia arquitecturas backend más completas y hacia el
trabajo posterior con Spring Boot.

    Controller → Service → Repository → Model
    