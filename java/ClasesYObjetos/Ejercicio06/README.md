Ejercicio 6 - Modelo completo de dominio

Objetivo

Construir un pequeño modelo de dominio con varias clases relacionadas, encapsulación,
validaciones y comportamiento.

Elige una opción

Puedes elegir uno de estos dominios:

| Opcion | Dominio| Clases mínimas |
|-----------|-----------|-----------|
|  A   | Productos y categorías  | Producto , Categoria , Main   |
|  B   | Cursos y alumnos  | Curso , Alumno , Matricula , Main   |
|  C   | Incidencias   | Incidencia , Usuario , Main   |
|  D   | Eventos y entradas   | Evento , Entrada , Asistente , Main   |
|  E   | Pedidos  | Producto , LineaPedido , Pedido , Main  |


## Opción A - Productos y categorías

### Clases

    Categoria
    Producto
    Main

### Categoria

Atributos:

    nombre
    descripcion
    activa

Métodos:

    desactivar()
    isActiva()
    toString()

### Producto

Atributos:

    nombre
    precio
    stock
    activo
    categoria

Métodos:

    tieneStock()
    reducirStock(int cantidad)
    aumentarStock(int cantidad)
    calcularValorInventario()
    desactivar()
    getNombreCategoria()
    toString()

Validaciones

    nombre no vacío
    precio >= 0
    stock >= 0
    categoria no null
    cantidad de stock mayor que 0

## Opción B - Cursos, alumnos y matrículas

### Clases

    Curso
    Alumno
    Matricula
    Main

### Curso

Atributos:

    titulo
    duracionHoras
    precio
    activo

Métodos:

    esIntensivo()
    desactivar()
    toString()

### Alumno

Atributos:

    nombre
    email
    activo

Métodos:

    desactivar()
    isActivo()
    toString()

### Matricula

Atributos:

    alumno
    curso
    estado
    precioFinal

Estados válidos:

    ACTIVA
    CANCELADA
    FINALIZADA

Métodos:

    cancelar()
    finalizar()
    estaActiva()
    toString()

## Validaciones

    curso no null
    alumno no null
    precioFinal >= 0
    estado inicial ACTIVA

## Opción C - Incidencias

### Clases

    Usuario
    Incidencia
    Main

### Usuario

Atributos:

    nombre
    email
    activo

Métodos:

    desactivar()
    isActivo()
    toString()

### Incidencia

Atributos:

    titulo
    descripcion
    estado
    prioridad
    activa
    usuario

Estados:

    ABIERTA
    EN_PROCESO
    RESUELTA
    CERRADA

Prioridades:

    BAJA
    MEDIA
    ALTA
    CRITICA

Métodos:

    marcarEnProceso()
    resolver()
    cerrar()
    desactivar()
    estaAbierta()
    esCritica()
    toString()

## Validaciones

    titulo no vacío
    descripcion no vacía
    usuario no null
    estado inicial ABIERTA
    prioridad válida

## Opción D - Eventos y entradas

### Clases

    Evento
    Entrada
    Asistente
    Main

### Evento

Atributos:

    titulo
    aforoMaximo
    precioBase
    activo

Métodos:

    desactivar()
    isActivo()
    toString()

### Asistente

Atributos:

    nombre
    email
    edad

Métodos:
    esMayorDeEdad()
    toString()

### Entrada

Atributos:

    evento
    asistente
    tipo
    precioFinal
    estado

Tipos:

    GENERAL
    VIP

Estados:

    ACTIVA
    CANCELADA

Métodos:

    cancelar()
    estaActiva()
    calcularPrecioFinal()
    toString()

## Validaciones

    evento no null
    asistente no null
    tipo válido
    precioFinal >= 0
    solo mayores de edad pueden tener entrada

## Opción E - Pedidos y líneas de pedido

### Clases

    Producto
    LineaPedido
    Pedido
    Main

### Producto

Atributos:

    nombre
    precio
    stock
    activo

Métodos:

    tieneStock()
    reducirStock(int cantidad)
    toString()

### LineaPedido

Atributos:

    producto
    cantidad
    precioUnitario

Métodos:

    calcularSubtotal()
    toString()

### Pedido

Atributos:

    codigo
    linea1
    linea2
    estado

Estados:

    PENDIENTE
    CONFIRMADO
    CANCELADO

Métodos:

    confirmar()
    cancelar()
    calcularTotal()
    toString()

## Requisitos generales del ejercicio 6

Tu solución debe incluir:

| Requisito | Obligatorio |
|-----------|-----------|
| Al menos dos clases de dominio   | Si  | 
| Clase Main   | Si   | 
| Atributos private   | Si   |
| Constructores con parámetros   | Si   |
| Uso correcto de this   | Si   |
| Getters necesarios   | Si   |
| Setters solo cuando tengan sentido   | Si   |
| Validación básica   | Si   |
| Al menos un método de comportamiento   | Si   |
| Al menos un método que calcule o derive información   | Si   |
| toString() sobrescrito en alguna clase   | Si   |
| Una relación entre clases   | Si   |
| Nombres claros y convenciones Java   | Si   |
| Código que compile y pueda ejecutarse   | Si   |


## Criterios de calidad

| Criterio | Nivel esperado |
|-----------|-----------|
| Diseño   | Las clases representan conceptos claros| 
| Encapsulación | Los atributos son privados| 
| Construcción   | Los objetos se crean con datos mínimos| 
| Validación   | Se evitan estados claramente inválidos| 
| Comportamiento   | Hay métodos que expresan acciones del dominio| 
| Responsabilidad   | Cada clase tiene una función clara| 
| Relaciones   | Las clases se conectan de forma coherente| 
| toString()   | Ayuda a revisar los objetos| 
| Código   | Compila y se ejecuta| 
| Claridad   | Los nombres explican la intención| 