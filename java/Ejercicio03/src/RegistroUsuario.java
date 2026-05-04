import java.util.Scanner;

public class RegistroUsuario {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Introduce tu nombre");
        String nombre = sc.nextLine();
        System.out.println("Introduce tu edad");
        int edad = sc.nextInt();
        sc.nextLine();
        System.out.println("Introduce tu email");
        String email = sc.nextLine();

        System.out.println("Usuario registrado");
        System.out.println("Nombre: "+nombre);
        System.out.println("Edad: "+edad);
        System.out.println("Email: "+email);
    }
}