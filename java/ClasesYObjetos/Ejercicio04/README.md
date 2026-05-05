Ejercicio 4 - Relación entre clases

Objetivo

Representar una relación simple entre dos clases.

Enunciado

Amplía el ejercicio anterior creando una clase:

    Categoria

Un producto debe pertenecer a una categoría.

Relación:

    Categoria 1 ---- N Producto

En esta sesión solo necesitas representar que cada producto tiene una categoría:

```java
private Categoria categoria;
```

## Clase Categoria

Debe tener:

    nombre
    descripcion
    activa

Requisitos:

1. Atributos private .
2. Constructor.
3. Getters.
4. Método desactivar() .
5. toString() .

## Clase Producto

Añade el atributo:

```java
private Categoria categoria;
```

Añade un método:

```java
public String getNombreCategoria() {
    return categoria.getNombre();
}
```

## Prueba en Main

Crea:

```java
Categoria tecnologia = new Categoria("Tecnología","Productos electrónicos");

Producto teclado = new Producto("Teclado mecánico", 79.99, 10, tecnologia);
```

Muestra:

    nombre del producto
    precio
    stock
    nombre de la categoría
    valor total del inventario