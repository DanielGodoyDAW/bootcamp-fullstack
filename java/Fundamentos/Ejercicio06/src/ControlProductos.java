import java.util.Scanner;

public class ControlProductos {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("¿Cuántos productos vas a registrar?");
        int cantidad = Integer.parseInt(sc.nextLine());

        String[] nombres = new String[cantidad];
        double[] precios = new double[cantidad];
        int[] stocks = new int[cantidad];
        String[] estados = new String[cantidad];

        for (int i = 0; i < cantidad; i++) {
            nombres[i] = pedirNombre(sc);
            precios[i] = pedirPrecio(sc);
            stocks[i] = pedirStock(sc);
            estados[i] = pedirEstado(sc);

        }

        mostrarListado(nombres, precios, stocks, estados, cantidad);
        mostrarResumen(nombres, precios, stocks, estados, cantidad);

    }

    public static String pedirNombre(Scanner sc) {
        String nombre = "";
        while (nombre.isEmpty()) {
            System.out.println("Nombre del producto:");
            nombre = sc.nextLine();
            if (nombre.isEmpty()) {
                System.out.println("El nombre no puede estar vacío");
            }
        }
        return nombre;
    }

    public static double pedirPrecio(Scanner sc) {
        double precio = -1;
        while (precio < 0) {
            System.out.println("Precio:");
            precio = Double.parseDouble(sc.nextLine());
            if (precio < 0) {
                System.out.println("El precio no puede ser negativo");
            }
        }
        return precio;
    }

    public static int pedirStock(Scanner sc) {
        int stock = -1;
        while (stock < 0) {
            System.out.println("Stock:");
            stock = sc.nextInt();
            if (stock < 0) {
                System.out.println("El stock no puede ser negativo");
            }
        }
        return stock;
    }

    public static String pedirEstado(Scanner sc) {
        String estado = "";
        while (!estado.equals("ACTIVO") && !estado.equals("INACTIVO")) {
            System.out.println("Estado (ACTIVO/INACTIVO):");
            estado = sc.nextLine();
            if (!estado.equals("ACTIVO") && !estado.equals("INACTIVO")) {
                System.out.println("Estado no válido, escribe ACTIVO o INACTIVO");
            }
        }
        return estado;
    }

    public static void mostrarListado(String[] nombres, double[] precios, int[] stocks, String[] estados,
            int cantidad) {
        System.out.println("Listado de productos");
        System.out.println("--------------------");
        for (int i = 0; i < cantidad; i++) {
            System.out.println("Producto: " + nombres[i]);
            System.out.println("Precio: " + precios[i]);
            System.out.println("Stock: " + stocks[i]);
            System.out.println("Estado: " + estados[i]);
        }
    }

    public static double valorTotal(double[] precios, int[] stocks, int cantidad) {
        double total = 0;
        for (int i = 0; i < cantidad; i++) {
            total += precios[i] * stocks[i];
        }
        return total;
    }

    public static int sinStock(int[] stocks, int cantidad) {
        int resultado = 0;
        for (int i = 0; i < cantidad; i++) {
            if (stocks[i] == 0) {
                resultado++;
            }
        }
        return resultado;
    }

    public static int productosActivos(String[] estados, int cantidad) {
        int resultado = 0;
        for (int i = 0; i < cantidad; i++) {
            if (estados[i].equals("ACTIVO")) {
                resultado++;
            }
        }
        return resultado;
    }

    public static void mostrarResumen(String[] nombres, double[] precios, int[] stocks, String[] estados,
            int cantidad) {
        System.out.println("Resumen");
        System.out.println("-------");
        System.out.println("Valor total del inventario: " + valorTotal(precios, stocks, cantidad));
        System.out.println("Productos sin stock: " + sinStock(stocks, cantidad));
        System.out.println("Productos activos: " + productosActivos(estados, cantidad));
    }
}
