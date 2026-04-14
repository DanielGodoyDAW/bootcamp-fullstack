ex08 — Revisión de comportamiento

Analiza este código y corrígelo para que el resultado final sea coherente con la intención de
aumentar tres veces seguidas.

```tsx

function Sample() {

    const [value, setValue] = useState(0);
    
    function handleClick() {
        setValue(value + 1);
        setValue(value + 1);
        setValue(value + 1);
    }

return <button onClick={handleClick}>{value}</button>;
}
```
Entrega

1. Explicación breve de lo que ocurre.
2. Versión corregida.
3. Explicación breve del criterio usado.