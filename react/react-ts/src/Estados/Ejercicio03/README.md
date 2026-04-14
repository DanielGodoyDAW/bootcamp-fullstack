ex03 — Corrección de código

Corrige este componente para que funcione correctamente.

```tsx
function Sample() {
    const [value, setValue] = useState(0);

    function updateValue() {
        value = value + 1;
    }

    return (
        <section>
            <p>{value}</p>
            <button onClick={updateValue}>Actualizar</button>
        </section>
    );
}
```

Entrega

    Código corregido.
    Explicación breve de los fallos detectados.