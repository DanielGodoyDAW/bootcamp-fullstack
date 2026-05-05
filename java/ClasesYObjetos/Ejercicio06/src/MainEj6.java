public class MainEj6 {
    public static void main(String[] args) {
        ProductoEj6 producto1 = new ProductoEj6("Camiseta", 19.99, 10, new CategoriaEj6("Ropa", "Ropa de hombre y mujer"));
        CategoriaEj6 categoria1 = new CategoriaEj6("Ropa", "Ropa de hombre y mujer");

        System.out.println(producto1);
        System.out.println();
        System.out.println(categoria1);
    }
}
