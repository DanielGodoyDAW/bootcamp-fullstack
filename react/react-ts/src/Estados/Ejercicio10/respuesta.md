1. Saber si una caja está abierta o cerrada.

Requiere estado. Es una información que cambia por la interacción del usuario (clic) y React debe "recordar" en qué estado se quedó para saber si pintar la caja o no.

2. Mostrar un texto fijo escrito directamente en el componente.

Se resuelve en el render. Al ser información estática que no cambia nunca, no necesita estado ni lógica especial; se escribe directamente en el JSX.

3. Mostrar el resultado de una operación hecha con un valor ya disponible.

Se resuelve en el render. Si el valor ya existe (por ejemplo, viene de una prop o de otro estado), el cálculo se hace directamente en el cuerpo de la función. No se debe crear un estado nuevo para algo que se puede calcular a partir de lo que ya tienes.

4. Recordar cuántas veces se ha pulsado un botón.

Requiere estado. Es información dinámica que el componente debe "memorizar" entre un renderizado y otro. Cada pulsación debe actualizar ese valor y provocar que se vuelva a pintar.

5. Mostrar la longitud de una lista fija.

Se resuelve en el render. Si la lista es fija (no va a cambiar), basta con acceder a la propiedad .length durante el renderizado. No tiene sentido guardar la longitud en un estado si la lista no va a crecer ni encoger.