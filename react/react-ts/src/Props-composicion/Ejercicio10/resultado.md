1. Explica por qué este diseño no es buena idea.

Este diseño no es una buena idea porque viola el principio de DRY (Don't Repeat Yourself). Al tener múltiples componentes que comparten la misma estructura pero solo difieren en el contenido, se está duplicando código innecesariamente. Esto hace que el mantenimiento sea más difícil, ya que cualquier cambio en la estructura del componente tendría que ser replicado en todos los componentes similares, aumentando la probabilidad de errores y inconsistencias.

2. Propón una alternativa mejor.

Una alternativa mejor sería crear un único componente reutilizable que acepte props para el contenido específico de cada curso. De esta manera, se puede mantener una sola estructura de componente y simplemente pasar diferentes datos para cada curso, lo que mejora la mantenibilidad y reduce la duplicación de código.

3. Reescribe el enfoque usando un único componente reutilizable.

```tsx
function CourseCatalog() {
  const courses = [
    { title: "React", level: "Intermedio", duration: "8 semanas", actionText: "Ver curso" },
    { title: "Java", level: "Avanzado", duration: "10 semanas", actionText: "Ver curso" },
    { title: "Spring Boot", level: "Avanzado", duration: "6 semanas", actionText: "Ver curso" },
    { title: "SQL", level: "Principiante", duration: "5 semanas", actionText: "Ver curso" }
  ];

  return (
    <div className="catalog">
      {courses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}

export default CourseCatalog;
```
