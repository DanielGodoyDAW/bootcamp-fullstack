import java.util.Scanner;

public class ControlReservas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("¿Cuántas reservas vas a registrar?");
        int cantidad = Integer.parseInt(sc.nextLine());

        String[] usuarios = new String[cantidad];
        String[] salas = new String[cantidad];
        int[] inicios = new int[cantidad];
        int[] fines = new int[cantidad];
        String[] estados = new String[cantidad];

        for (int i = 0; i < cantidad; i++) {
            usuarios[i] = pedirUsuario(sc);
            salas[i] = pedirSala(sc);
            inicios[i] = pedirHoraInicio(sc);
            fines[i] = pedirHoraFin(sc, inicios[i]);
            estados[i] = pedirEstado(sc);
        }

        mostrarListado(usuarios, salas, inicios, fines, estados, cantidad);
        mostrarResumen(estados, inicios, fines, cantidad);
    }

    public static String pedirUsuario(Scanner sc) {
        String usuario = "";
        while (usuario.isEmpty()) {
            System.out.println("Nombre de usuario:");
            usuario = sc.nextLine();
            if (usuario.isEmpty()) {
                System.out.println("El nombre no puede estar vacío");
            }
        }
        return usuario;
    }

    public static String pedirSala(Scanner sc) {
        String sala = "";
        while (sala.isEmpty()) {
            System.out.println("Sala:");
            sala = sc.nextLine();
            if (sala.isEmpty()) {
                System.out.println("La sala no puede estar vacía");
            }
        }
        return sala;
    }

    public static int pedirHoraInicio(Scanner sc) {
        int hora = -1;
        while (hora < 0 || hora > 23) {
            System.out.println("Hora de inicio (0-23):");
            hora = Integer.parseInt(sc.nextLine());
            if (hora < 0 || hora > 23) {
                System.out.println("La hora debe estar entre 0 y 23");
            }
        }
        return hora;
    }

    public static int pedirHoraFin(Scanner sc, int horaInicio) {
        int hora = -1;
        while (hora < 0 || hora > 23 || hora <= horaInicio) {
            System.out.println("Hora de fin (0-23):");
            hora = Integer.parseInt(sc.nextLine());
            if (hora < 0 || hora > 23) {
                System.out.println("La hora debe estar entre 0 y 23");
            } else if (hora <= horaInicio) {
                System.out.println("La hora de fin debe ser mayor que la de inicio (" + horaInicio + ")");
            }
        }
        return hora;
    }

    public static String pedirEstado(Scanner sc) {
        String estado = "";
        while (!estado.equals("PENDIENTE") && !estado.equals("CONFIRMADA") && !estado.equals("CANCELADA")) {
            System.out.println("Estado (PENDIENTE/CONFIRMADA/CANCELADA):");
            estado = sc.nextLine();
            if (!estado.equals("PENDIENTE") && !estado.equals("CONFIRMADA") && !estado.equals("CANCELADA")) {
                System.out.println("Estado no válido");
            }
        }
        return estado;
    }

    public static void mostrarListado(String[] usuarios, String[] salas, int[] inicios, int[] fines, String[] estados,
            int cantidad) {
        System.out.println("Listado de reservas");
        System.out.println("-------------------");
        for (int i = 0; i < cantidad; i++) {
            System.out.println("Usuario: " + usuarios[i]);
            System.out.println("Sala: " + salas[i]);
            System.out.println("Inicio: " + inicios[i] + "h");
            System.out.println("Fin: " + fines[i] + "h");
            System.out.println("Estado: " + estados[i]);
            System.out.println();
        }
    }

    public static void mostrarResumen(String[] estados, int[] inicios, int[] fines, int cantidad) {
        System.out.println("Resumen");
        System.out.println("-------");
        System.out.println("Reservas confirmadas: " + contarConfirmadas(estados, cantidad));
        System.out.println("Duración total reservada: " + duracionTotal(inicios, fines, cantidad) + "h");
    }

    public static int contarConfirmadas(String[] estados, int cantidad) {
        int resultado = 0;
        for (int i = 0; i < cantidad; i++) {
            if (estados[i].equals("CONFIRMADA")) {
                resultado++;
            }
        }
        return resultado;
    }

    public static int duracionTotal(int[] inicios, int[] fines, int cantidad) {
        int total = 0;
        for (int i = 0; i < cantidad; i++) {
            total += fines[i] - inicios[i];
        }
        return total;
    }
}