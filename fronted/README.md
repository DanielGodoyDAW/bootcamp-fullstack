# ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) PokeAPI Project (Vanilla JS)

Proyecto desarrollado a partir de una maqueta visual de Pokémon, evolucionando desde una implementación estática hasta el consumo de la API PokéAPI.

---

##  Descripción

Este proyecto comenzó como un ejercicio de maquetación a partir de una imagen que mostraba 9 Pokémon.

A partir de ahí, el desarrollo fue evolucionando progresivamente:

1. Creación de HTML manual basado en la maqueta
2. Aplicación de estilos CSS
3. Transformación a renderizado dinámico con JavaScript
4. Sustitución de datos mock por consumo real de API

---

##  Contexto inicial

El proyecto **no partía del uso de una API**, sino de una referencia visual.

* No se había trabajado aún con APIs
* No se conocía previamente la existencia de PokéAPI
* El objetivo inicial era reproducir fielmente el diseño

Por ello, la estructura se diseñó en base a lo visual:

* Clases CSS en español (`.planta`, `.fuego`, etc.)
* Estructura pensada únicamente para render estático

👉 El resultado fue una maqueta visual muy fiel incluso antes de usar datos dinámicos.

---

##  Cambio de requisitos

Posteriormente, el proyecto evolucionó:

> Se sustituyeron los datos mock por datos reales consumidos desde la API

Aquí apareció el punto clave:

* La API trabaja en inglés (`grass`, `fire`, etc.)
* El proyecto estaba estructurado en español

---

##  Solución aplicada

Para integrar ambos mundos sin rehacer todo el CSS, se implementó un sistema de mapeo:

```js
const TIPO_MAP = {
  grass: "planta",
  fire: "fuego",
  water: "agua",
  poison: "veneno",
  flying: "volador",
  electric: "electrico",
  psychic: "psiquico",
  ice: "hielo",
  dragon: "dragon",
  dark: "siniestro",
  steel: "acero",
  fairy: "hada",
  normal: "normal",
  fighting: "lucha",
  ground: "tierra",
  rock: "roca",
  bug: "bicho",
  ghost: "fantasma",
};
```

Y funciones auxiliares para adaptar los datos:

```js
function obtenerTipoPokemon(tipo) {
  const tipoIngles = tipo.toLowerCase();
  return TIPO_MAP[tipoIngles] || tipoIngles;
}
```

Esto permitió reutilizar toda la estructura previa sin rehacer el diseño.

---

##  Impacto técnico

Aunque la solución fue válida, introdujo:

* 🔁 Conversión constante entre idiomas
* 🧩 Complejidad adicional en la lógica
* 🔧 Dependencia de funciones de adaptación
* 📉 Menor claridad en el flujo de datos

---

##  Lectura correcta del problema

Este caso no fue un error de diseño inicial, sino:

> Un proyecto que cambió de enfoque (de estático a dinámico con API)

Y que requirió adaptarse sobre una base ya construida.

---

##  Aprendizajes clave

* Los requisitos pueden cambiar durante el desarrollo
* Adaptar código existente es parte del trabajo real
* Es importante separar:

  * lógica interna (datos)
  * presentación (UI)
* Alinear estructura con fuentes de datos externas simplifica el código

---

##  Conclusión

Este proyecto refleja una evolución real:

* De maquetación estática basada en diseño
* A aplicación dinámica conectada a una API

La solución intermedia (mapeo de tipos) fue necesaria en su contexto.

---

##  Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Fetch API
* PokéAPI

---

##  Estado del proyecto

✔ Maquetación inicial fiel al diseño
✔ Render dinámico con JavaScript
✔ Integración con API
