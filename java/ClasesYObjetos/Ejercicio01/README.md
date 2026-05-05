Ejercicio 1 - De variables sueltas a clase

Objetivo

Comprender por qué una clase permite agrupar datos relacionados.

Enunciado

Partimos de este código basado en variables sueltas:

```java
public class Main {

    public static void main(String[] args) {
        String tituloCurso = "Java Backend";
        int duracionHoras = 80;
        double precio = 299.99;
        boolean activo = true;

        System.out.println(tituloCurso);
        System.out.println(duracionHoras);
        System.out.println(precio);
        System.out.println(activo);
    }
}
```

Transforma ese código creando una clase:

    Curso

La clase debe tener los siguientes atributos:

    titulo
    duracionHoras
    precio
    activo

En esta primera versión los atributos pueden ser públicos.