Ejercicio 7. Composición con children

Crea un componente Panel que actúe como contenedor reutilizable usando children .

Debe renderizar una estructura básica como esta:

    un section o article ;
    una clase CSS genérica;
    dentro, el contenido que se le pase entre sus etiquetas.

Después

Usa Panel al menos en tres casos distintos:

1. con un título y un párrafo;
2. con una lista;
3. con un botón y un pequeño texto de apoyo.

Objetivo

Entender que algunos componentes no reciben solo datos concretos, sino contenido interno flexible.

Pista

La estructura de uso debería parecerse a algo como esto:

```tsx
<Panel>
    <h2>...</h2>
    <p>...</p>
</Panel>
```