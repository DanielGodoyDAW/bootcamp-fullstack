## Ejercicio: Mundo Pokémon

Este ejercicio documenta la evolución de una aplicación de Pokémon, desde la maquetación básica hasta la integración con una API externa y componentes modernos.

### Evolución del Proyecto

#### 1. **Base HTML**
Comenzamos creando una estructura base en HTML puro, estableciendo los elementos fundamentales para mostrar información de Pokémon.

#### 2. **Maquetación CSS**
Posteriormente, maquetamos la interfaz utilizando CSS, dando estilo y diseño visual a los elementos HTML creados inicialmente.

#### 3. **Tarjetas Dinámicas con JavaScript**
Sustituimos las tarjetas estáticas de HTML puro por una creación dinámica de tarjetas a través de JavaScript. Para ello, utilizamos un objeto Pokémon creado manualmente que contenía:
- `id`: Identificador único del Pokémon
- `nombre`: Nombre del Pokémon
- `tipos`: Tipos del Pokémon
- `imagenes`: URLs de las imágenes del Pokémon
- `gifs`: URLs de los gif del Pokémon
- `tipos_color`: los distintos tipos de Pokémon y su color asociado
- `evolucion`: en caso de no tener seria null, en caso de tener una evolución se mostraría el nombre del Pokémon al que evoluciona


#### 4. **Integración con PokéAPI**
Integramos la [PokéAPI](https://pokeapi.co/) para extraer la información de Pokémon desde una fuente externa, reemplazando el objeto creado manualmente y permitiendo acceso a una base de datos completa y actualizada.

#### 5. **Refactorización con React** (Próximo paso)
Llevaremos la aplicación a un nivel superior migrando el código a React, utilizando componentes reutilizables, hooks para gestionar el estado y los efectos, y mejorando la arquitectura general de la aplicación.

### Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- PokéAPI
- React (En proceso de integración)