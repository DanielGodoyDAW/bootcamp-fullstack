Ejercicio 3. Corregir un componente con errores de props

Este código pretende usar props, pero contiene varios errores. Corrígelo.

```tsx
function ProfileCard({ name, role city }) {
    return (
        <section className="profile-card">
            <h2>{props.name}</h2>
            <p>{role}</p>
            <p>{city}</p>
        </section>
    );
}
function App() {
    return (
        <main>
            <ProfileCard name="Lucía" role="Frontend Developer" city="Madrid">
            </ProfileCard>
            <ProfileCard name="Álvaro" role="Backend Developer" city="Sevilla">
            </ProfileCard>
        </main>
    );
}
```

Qué debes entregar

    El código corregido.
    Una lista breve explicando qué errores había.

Pistas

Revisa con cuidado:

    la firma del componente;
    el uso de props frente a desestructuración;
    la sintaxis JSX;
    la coherencia entre lo que pasas y lo que lees.