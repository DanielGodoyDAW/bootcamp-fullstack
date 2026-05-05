Ejercicio 3 - Métodos de comportamiento frente a setters

Objetivo

Evitar setters indiscriminados y crear métodos que expresen acciones del dominio.

Enunciado

Crea una clase:

    Producto

Debe tener:

    nombre
    precio
    stock
    activo

Reglas:

    el nombre no puede estar vacío
    el precio no puede ser negativo
    el stock no puede ser negativo
    un producto nuevo se crea activo

Requisitos

La clase debe tener:

1. Atributos private .
2. Constructor con parámetros.
3. Getters.
4. Método tieneStock() .
5. Método reducirStock(int cantidad) .
6. Método aumentarStock(int cantidad) .
7. Método calcularValorInventario() .
8. Método desactivar() .
9. toString() .

Restricción importante

No crees un setter público libre para **stock** . En lugar de eso, usa los métodos con intención.

Ejemplo de comportamiento esperado

```java
Producto teclado = new Producto("Teclado", 79.99, 10);

System.out.println(teclado.tieneStock()); // true
teclado.reducirStock(3);
System.out.println(teclado.getStock()); // 7
System.out.println(teclado.calcularValorInventario());
```

Validaciones esperadas

El método **reducirStock** debe evitar:

    cantidades negativas
    cantidad 0
    reducir más unidades de las disponibles

El método **aumentarStock** debe evitar:

    cantidades negativas
    cantidad 0