public class MainEj4 {
    public static void main(String[] args) {
        Categoria tecnologia = new Categoria("Tecnología", "Productos electrónicos");

        ProductoEj4 teclado = new ProductoEj4("Teclado mecánico", 79.99, 10, tecnologia);

        System.out.println(tecnologia);
        System.out.println();
        System.out.println(teclado);
    }
}
