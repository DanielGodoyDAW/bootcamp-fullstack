## Proyecto: Pokedex

### Descripción
En este proyecto, construimos una aplicación de Pokedex utilizando React. La aplicación muestra una lista de Pokémon y permite a los usuarios buscar Pokémon por nombre. Utilizamos la API de Pokémon (PokeAPI) para obtener los datos necesarios.

### Requisitos
1. **Mostrar una lista de Pokémon**: Al cargar la aplicación, se muestra una lista de Pokémon con su nombre, imagen, tipos y evolución.
2. **Buscar Pokémon por nombre**: La aplicación tiene una barra de búsqueda que permite a los usuarios filtrar Pokémon por nombre. Al ingresar letras, se muestran todos los Pokémon que contengan esas letras.
3. **Limpiar búsqueda**: La aplicación limpia automáticamente la búsqueda cuando se vacía el campo de entrada, mostrando nuevamente la lista completa.
4. **Popup interactivo**: Al hacer clic en un Pokémon, se abre un popup con gradiente dinámico basado en sus tipos, mostrando información detallada.
5. **Diseño atractivo**: La aplicación cuenta con un diseño moderno y responsivo, fácil de usar.

### Tecnologías
- React (Hooks: useState, useRef, useEffect)
- TypeScript
- CSS3 (Gradientes, Flexbox)
- PokeAPI (https://pokeapi.co/)

### Evolución del Proyecto

#### Primera Fase: HTML/CSS/JavaScript Vanilla
En la primera iteración, creamos la estructura en HTML puro con clases CSS **en español** (`.tipo-planta`, `.tipo-fuego`, etc.). Esto funcionó correctamente para la versión estática inicial.

#### Segunda Fase: Integración de Fetch
Al migrar a fetch y conectar con PokeAPI, descubrimos que los datos venían **en inglés** (grass, fire, water). Para solucionarlo rápidamente, creamos una función que tradujera los tipos de inglés a español:

```javascript
function traducirTipo(tipoIngles) {
  const traduccion = {
    grass: 'planta',
    fire: 'fuego',
    water: 'agua',
    // ... más tipos
  };
  return traduccion[tipoIngles] || tipoIngles;
}
```
Problema: Esta aproximación funcionaba, pero añadía complejidad innecesaria y no era escalable.

## Tercera Fase: Migración a React (Solución Correcta)
Al pasar a React, aprovechamos para refactorizar completamente:

- Renombramos todas las clases CSS al inglés (.tipo-grass, .tipo-fire, etc.), alineándonos con los datos de PokeAPI
- Eliminamos la función de traducción
- Implementamos componentes React reutilizables
- Utilizamos TypeScript para mayor seguridad de tipos

# Lección Aprendida: 
Es mejor mantener la consistencia con las APIs externas desde el inicio. Si PokeAPI devuelve datos en inglés, es más limpio y escalable usar nomenclatura en inglés en el código, evitando capas de traducción innecesarias.

# Estructura del Proyecto

```
pokedex/
    src/
    ├── components/
    │   ├── PokemonCard.tsx       // Tarjeta individual de Pokémon
    │   ├── PokemonPopUp.tsx      // Modal con gradiente dinámico
    │   ├── SearchBar.tsx            // Barra de búsqueda
    │   └── BuscadorPokemon.tsx   // Barra de búsqueda con filtrado
    │
    │
    ├── services/
    │   └── pokemonApi.ts         // Funciones para conectar con PokeAPI
    ├── style/
    │   ├── globals.css           // Estilos globales
    │   ├── variables.css         // Variables CSS (colores por tipo)
    │   └── pokemonPopUp.css      // Estilos del popup
    └── App.tsx                   // Componente principal
```
## Características Implementadas

1. **Búsqueda Dinámica**

La barra de búsqueda filtra en tiempo real entre los Pokémon cargados, sin necesidad de hacer peticiones adicionales a la API.

2. **Popup con Gradiente Dinámico**

El popup del Pokémon cuenta con un gradiente de fondo que cambia según los tipos del Pokémon:

- Si tiene un tipo: gradiente monocolor
- Si tiene dos tipos: gradiente entre los dos colores

```tsx
const color1 = `var(--color-${pokemon.types[0].toLowerCase()})`;
const color2 = pokemon.types[1] 
  ? `var(--color-${pokemon.types[1].toLowerCase()})`
  : color1;

const gradientStyle = {
  background: `linear-gradient(135deg, ${color1}, ${color2})`,
};
```

3. **Variables CSS Reutilizables**

Todos los colores de tipos se definen en variables.css, facilitando cambios globales:

```css
--color-grass: #1bbb10;
--color-fire: #ff4500;
--color-water: #1e90ff;
```

## Recomendaciones para Desarrolladores Futuros

✅ Haz:

- Mantén las clases y nomenclatura en inglés desde el inicio
- Usa variables CSS para reutilizar estilos
- Separa la lógica en servicios/hooks
- Aprovecha TypeScript para prevenir errores

❌ Evita:

- Traducir datos de APIs externas (crea complejidad innecesaria)
- Mezclar español e inglés en el código
- Hardcodear valores que pueden venir de APIs

## Cómo Ejecutar

```bash
pnpm install
pnpm run dev
```

Luego abre `http://localhost:5173` en tu navegador para ver la aplicación en acción.

## APIs Utilizadas

- PokeAPI: https://pokeapi.co/ (para obtener datos de Pokémon)
    Endpoints usados:
        /pokemon?limit=9 - Obtener lista de Pokémon
        /pokemon/{name} - Obtener detalles de un Pokémon

## Autor

- Daniel Godoy Medina ([@DanielGodoyDAW])
