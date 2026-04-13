## Caso A

```jsx
function Card() { 
    return ( 
        <h2>Tarjeta</h2>;
    )
}
export default Card; 


    El nombre de la función debe empezar con mayúscula 
    el return lleva parentesis
    Es necesario exportar la función para poder usarla en otros archivos
```
## Caso B
```jsx
function App() {
    return (
        <>
        <h1>Título</h1>
        <p>Texto</p>
        </>
    );
}
export default App; 


    El return solo puede devolver un elemento, por lo que hay que envolverlo en un fragmento (<> </>)
```
## Caso C
```jsx
function FormBlock() {
    return (
        <label htmlFor="name">Nombre</label>
    );
}
export default FormBlock; 


    En React, el atributo "for" se reemplaza por "htmlFor" para evitar conflictos con la palabra reservada "for" en JavaScript.
```
## Caso D
```jsx
function Cover() {
    return (
        <img src="cover.jpg" alt="Portada" />
    );
}
export default Cover; 

    En React, los elementos de auto-cierre como <img> deben cerrarse con una barra al final (<img />) para evitar errores de sintaxis.

```


