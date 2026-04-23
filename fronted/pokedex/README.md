# ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) Refactorización a React – PokeAPI Project

Esta versión del proyecto representa la evolución de la implementación inicial en JavaScript hacia una arquitectura basada en React, corrigiendo decisiones anteriores y mejorando la mantenibilidad del código.

Se continúa utilizando la API PokéAPI como fuente de datos.

  🔗 Este proyecto parte de una versión inicial en Vanilla JS (disponible en la carpeta `mundo-pokemon`), desarrollada a partir de una maqueta visual.

---

##  Objetivo de la refactorización

Tras la versión inicial en Vanilla JS, el objetivo principal fue:

* Migrar el renderizado al modelo de componentes de React
* Reorganizar la lógica en módulos reutilizables
* Corregir el problema de desacoplamiento entre datos y estructura
* Simplificar el flujo de datos

---

##  Mejora clave: alineación con la API

En la versión anterior, los tipos de Pokémon requerían un sistema de mapeo (inglés → español), lo que añadía complejidad innecesaria.

En esta versión se adopta un enfoque más limpio:

👉 Se utilizan directamente los valores de la API como fuente de verdad

Ejemplo en el componente:

```tsx
<span className={`tipo ${item}`} key={item}>
  {item.charAt(0).toUpperCase() + item.slice(1)}
</span>
```

* `item` ya proviene en inglés desde la API (`grass`, `fire`, etc.)
* Se usa directamente como clase CSS
* Solo se transforma para presentación (capitalización)

---

##  Estructura del proyecto

Se separa claramente la lógica en distintos niveles:

###  Capa de datos (`pokemonApi.ts`)

Encargada de:

* Consumo de la API
* Transformación de datos
* Gestión de evoluciones

Ejemplo:

```ts
const mainType = datosApi.types?.[0]?.type?.name ?? "normal";
```

Aquí ya no existe ningún mapeo, se trabaja directamente con los datos originales.

---

###  Capa de presentación (`PokemonCard.tsx`)

Encargada de:

* Renderizar cada Pokémon
* Aplicar estilos dinámicos según el tipo
* Gestionar interacción (popup)

Ejemplo:

```tsx
<article className={`container container-${pokemon.type_color}`}>
```

El tipo (`type_color`) ya está alineado con la API, eliminando conversiones innecesarias.

---

##  Transformación de datos optimizada

La función `formatearPokemon` se simplifica respecto a la versión anterior:

```tsx
types: datosApi.types.map((tipo) => tipo.type.name.toLowerCase()),
type_color: mainType,
```

* Se mantiene el formato original de la API
* Se evita cualquier traducción en la lógica interna

---

##  Mejora respecto a la versión anterior

| Aspecto        | Antes (Vanilla JS)     | Ahora (React)         |
| -------------- | ---------------------- | --------------------- |
| Tipos Pokémon  | Mapeo inglés → español | Uso directo de la API |
| Complejidad    | Alta                   | Reducida              |
| Mantenibilidad | Media                  | Alta                  |
| Escalabilidad  | Limitada               | Mejorada              |
| Estructura     | Monolítica             | Modular (componentes) |

---

##  Buenas prácticas aplicadas

* Uso de la API como única fuente de verdad
* Separación clara entre lógica y presentación
* Componentización en React
* Manejo de estados (`useState`)
* Uso de `async/await` para flujos asíncronos
* Gestión de errores en peticiones

---

##  Conclusión

La refactorización a React no solo supuso un cambio de tecnología, sino una mejora en el diseño del proyecto:

* Se eliminó la necesidad de capas de adaptación innecesarias
* Se simplificó el código
* Se alineó completamente la estructura con la API

El resultado es una aplicación más limpia, mantenible y preparada para escalar.

---

##  Tecnologías utilizadas

* React
* TypeScript
* Fetch API
* CSS
* PokéAPI

---

##  Estado

✔ Refactorización completada
✔ Código optimizado
✔ Arquitectura modular aplicada
✔ Mejora de flujo de datos
