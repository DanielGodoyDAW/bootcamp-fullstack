Ejercicio 6. Usar el objeto props y la desestructuración

Crea dos versiones del mismo componente StudentCard .

Versión A

Debe leer las props usando el objeto props :

```tsx
function StudentCard(props) {
// ...
}
```

Versión B

Debe leer las props usando desestructuración:

```tsx
function StudentCard({ name, group, level }) {
// ...
}
```

Después responde

1.. ¿Qué diferencia sintáctica hay entre ambas?
2. ¿Cuál te resulta más legible en este caso?
3. ¿En qué momento puede venirte bien seguir usando props completo?

Objetivo

Entender bien las dos formas habituales de leer props.