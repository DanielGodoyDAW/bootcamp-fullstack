Ejercicio 6 - Programa completo de consola

Objetivo

Construir un programa completo que combine entrada de datos, validación, métodos, arrays, bucles y salida por consola.

Opción A - Control básico de productos

Crea un programa llamado:

    ControlProductos

Debe permitir registrar varios productos usando arrays.

De cada producto debes guardar:

    nombre
    precio
    stock
    estado

Estados válidos:

    ACTIVO
    INACTIVO

Requisitos mínimos

El programa debe:

1. Pedir cuántos productos se van a registrar.
2. Crear arrays para guardar:
    nombres;
    precios;
    stocks;
    estados.
3. Pedir los datos de cada producto.
4. Validar:
    nombre no vacío;
    precio mayor o igual que 0;
    stock mayor o igual que 0;
    estado válido.
5. Mostrar un listado de productos.
6. Calcular el valor total del inventario.
7. Contar cuántos productos tienen stock 0.
8. Contar cuántos productos están activos.
9. Usar métodos separados.
10. Evitar el problema nextInt() / nextDouble() + nextLine() .

Ejemplo de salida

    Listado de productos
    --------------------
    Producto: Teclado
    Precio: 79.99
    Stock: 10
    Estado: ACTIVO
    Producto: Ratón
    Precio: 25.50
    Stock: 0
    Estado: ACTIVO
    Resumen
    -------
    Valor total del inventario: 799.9
    Productos sin stock: 1
    Productos activos: 2

Opción B - Reservas de sala

Crea un programa llamado:

    ControlReservas

Debe permitir registrar varias reservas usando arrays.

De cada reserva debes guardar:

    nombre de usuario
    sala
    hora de inicio
    hora de fin
    estado

Estados válidos:

    PENDIENTE
    CONFIRMADA
    CANCELADA

Requisitos mínimos

El programa debe:

1. Pedir cuántas reservas se van a registrar.
2. Crear arrays para guardar los datos.
3. Pedir los datos de cada reserva.
4. Validar:
    - nombre de usuario no vacío;
    - sala no vacía;
    - hora de inicio entre 0 y 23;
    - hora de fin entre 0 y 23;
    - hora de inicio menor que hora de fin;
    - estado válido.
5. Mostrar el listado de reservas.
6. Contar cuántas reservas están confirmadas.
7. Calcular la duración total reservada.
8. Usar métodos separados.
9. Evitar el problema nextInt() + nextLine() .

Criterios de calidad del ejercicio 6

    Criterio        Nivel esperado

    Estructura      Clase con main , package e imports correctos
    Variables       Nombres claros y tipos adecuados
    Entrada         Uso correcto de Scanner
    Scanner         Control del problema nextInt() / nextDouble() + nextLine()
    Condicionales   Validaciones claras
    Arrays          Uso correcto para guardar varios datos
    Bucles          Recorrido correcto de arrays
    Métodos         Separación de responsabilidades

    Criterio        Nivel esperado

    String          Comparación con .equals()
    Constantes      Uso de al menos una constante
    Claridad        Salida comprensible
    Ejecución       El programa compila y funciona