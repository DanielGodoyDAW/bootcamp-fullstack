Ejercicio 2. De componente rígido a componente configurable

Partes de este componente rígido:

```tsx
function CourseCard() {
    return (
    <article className="course-card">
        <h2>React desde cero</h2>
        <p>Nivel: Intermedio</p>
        <p>Duración: 6 semanas</p>
        <button>Ver curso</button>
    </article>
    );
}
```

Convierte este componente en una versión reutilizable que acepte props para:

    el título;
    el nivel;
    la duración;
    el texto del botón.

Después

Usa ese mismo componente al menos tres veces con contenidos distintos.

Objetivo

Practicar la transformación de un componente fijo en uno reutilizable.


