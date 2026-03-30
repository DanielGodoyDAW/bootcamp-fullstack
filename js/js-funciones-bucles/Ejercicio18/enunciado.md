Ejercicio 18. Generador de turnos de práctica

Vas a crear un pequeño programa de consola para organizar turnos de práctica de una actividad.

El programa debe trabajar con:

    un número total de participantes;
    un mensaje base que se mostrará en cada turno;
    una función callback que determine cómo se presenta la información de cada turno.

Objetivo

Debes construir una solución que combine bucles, funciones, reutilización de lógica y callbacks, de forma que el programa pueda mostrar una secuencia de mensajes de turnos de manera organizada.

Qué debes construir

Tu programa debe seguir, de forma general, esta secuencia:

1. validar el número de participantes;
2. recorrer todos los turnos;
3. generar el texto correspondiente a cada turno;
4. pasar ese texto a un callback;
5. dejar que el callback decida cómo se muestra o transforma ese mensaje.

Requisitos obligatorios

1. Una función validadora

Crea una función que reciba el número de participantes y devuelva si ese valor es válido o no.

Condiciones mínimas:

    debe ser un número;
    debe ser mayor que 0.

2. Una función que genere el texto de un turno

Crea una función que reciba:

    el número de turno;
    un mensaje base.

Debe devolver un texto como este:

    Turno 1: comienza la práctica

No debe mostrarlo directamente por consola: debe devolverlo.

3. Una función principal que recorra los turnos

Crea una función que reciba:

    el número total de participantes;
    el mensaje base;
    una función callback.

Debe recorrer todos los turnos desde 1 hasta el total indicado y aplicar el callback a cada mensaje generado.

4. Un callback configurable

Define al menos dos callbacks distintos. Por ejemplo:

    uno que muestre el mensaje en mayúsculas;
    otro que muestre el mensaje rodeado de guiones.

Qué significa “aplicar el callback”

El callback recibirá el texto generado para cada turno y decidirá qué hacer con él.

Por ejemplo, podría:

    mostrarlo directamente;
    convertirlo a mayúsculas antes de mostrarlo;
    decorarlo con símbolos;
    cambiar ligeramente su formato.

Salida orientativa posible

Dependiendo del callback que uses, una salida válida podría parecerse a alguna de estas:

    TURNO 1: COMIENZA LA PRÁCTICA
    TURNO 2: COMIENZA LA PRÁCTICA
    TURNO 3: COMIENZA LA PRÁCTICA

o bien:

    --- Turno 1: comienza la práctica ---
    --- Turno 2: comienza la práctica ---
    --- Turno 3: comienza la práctica ---

Restricciones técnicas

Tu solución debe:

    usar al menos un bucle;
    usar al menos tres funciones con responsabilidades diferenciadas;
    incluir al menos un return ;
    incluir al menos un callback;
    evitar duplicar lógica.

Criterios de calidad

Tu solución será mejor si:

    los nombres de funciones y variables son claros;
    cada función hace una sola cosa principal;
    separas validación, generación de mensaje y visualización;
    la función principal no contiene toda la lógica mezclada;
    la salida por consola resulta fácil de entender.

Ampliación opcional

Añade una función o una mejora que permita empezar la numeración de turnos desde un valor distinto de 1 .

