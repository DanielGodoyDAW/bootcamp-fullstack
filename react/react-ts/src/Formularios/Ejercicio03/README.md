ex03 — Corrección de código

Corrige el siguiente componente.

```tsx
import { useState } from "react";

function SampleAccess() {
    const [email, setEmail] = useState("");

    function handleSubmit() {
        alert(`Dato enviado: ${email}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input
            id="email"
            type="email"
            value={email}
            />
            <button>Enviar</button>
        </form>
    );
}
```
Entrega

    Código corregido.
    Lista breve de errores encontrados.