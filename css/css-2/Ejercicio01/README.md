Ejercicio 1 · Combinadores y selectores de atributo
Nivel 1 · Recomendado
Objetivo

Practicar selectores más precisos a partir de una estructura HTML dada.

HTML de partida

Crea un index.html con esta estructura aproximada:

    un nav con tres enlaces directos;
    dentro de uno de esos enlaces, añade un span ;
    una section con dos h2 y varios párrafos;
    un formulario con:
        un input type="email"
        un input type="text" required ,
        y un input type="password"

Tarea

En styles.css :

1. da un estilo a los enlaces que estén dentro de nav ;
2. da un estilo distinto solo a los enlaces que sean hijos directos de nav ;
3. quita el margen superior al párrafo que vaya justo después de cada h2 ;
4. da un estilo específico al input que tenga required ;
5. da un fondo diferente al input[type="email"] .

Observa y comprueba

Fíjate en:

    la diferencia entre nav a y nav > a ;
    lo que selecciona h2 + p ;
    y cómo los atributos del HTML pueden ayudarte a seleccionar sin añadir más clases.

Se considerará bien resuelto si

    usas correctamente descendiente, hijo directo y hermano adyacente;
    aplicas selectores de atributo con sentido;
    y puedes distinguir visualmente los distintos casos.