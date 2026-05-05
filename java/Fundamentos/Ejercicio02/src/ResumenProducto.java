public class ResumenProducto {
    public static void main(String[] args) {
        String producto = "Teclado mecanico";
        double precio = 79.99;
        int stock = 15;
        boolean activo = true;
        String categoria ="Tecnologia";
        final double IVA = 0.21;

        System.out.println("Producto: "+producto);
        System.out.println("Categoria: "+categoria);
        System.out.println("Precio sin IVA: "+precio);
        System.out.println("Precio con IVA: "+precioTotalConIva(precio,IVA));
        System.out.println("Stock: "+stock);
        System.out.println("Valor total sin IVA: "+valorTotalSin(precio,stock));
        System.out.println("Valor total con IVA: "+valorTotalCon(precio,stock,IVA));
        System.out.println("Activo: "+activo);
    }

    public static double precioIva(double precio, double iva){

        return precio * iva;
    }

    public static double precioTotalConIva(double precio, double iva){
        return precio + precioIva(precio, iva);
    }

    public static double valorTotalSin(double precio, int stock){
        return precio * stock;
    }
    public static double valorTotalCon(double precio, int stock, double iva){
        return precioTotalConIva(precio,iva) * stock;
    }

}