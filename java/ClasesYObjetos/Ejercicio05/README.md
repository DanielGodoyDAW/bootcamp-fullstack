Ejercicio 5 - Crea un DTO

A partir de esta clase de dominio:

```java
public class Usuario {
    private Long id;
    private String nombre;
    private String email;
    private String passwordHash;
    private boolean activo;
}
```

Crea un DTO de salida que no exponga:

    passwordHash

Puedes hacerlo como clase tradicional o como record :

```java
public class UsuarioResponseDto {
// ...
}
```

O como record :

```java
public record UsuarioResponseDto(
        Long id,
        String nombre,
        String email
) {
}
```

## Pregunta

    ¿Por qué no debería devolverse passwordHash en un DTO de respuesta?
    Respuesta:

