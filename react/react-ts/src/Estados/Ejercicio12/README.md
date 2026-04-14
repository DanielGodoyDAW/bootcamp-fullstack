ex12 — Corrección de actualización

Revisa este ejemplo y reházlo correctamente.

```tsx
const [item, setItem] = useState({
    label: "Elemento",
    count: 1
});

function updateItem() {
    item.count = item.count + 1;
}
```

Entrega

1. Explicación breve del problema.
2. Versión corregida.
3. Un componente sencillo que lo use.