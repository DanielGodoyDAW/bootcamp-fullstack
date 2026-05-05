public class Producto {
    private String nombre;
    private double precio;
    private int stock;
    private boolean activo;

    public Producto() {

    }

    public Producto(String nombre, double precio, int stock) {
        this.nombre = comprobarNombre(nombre);
        this.precio = comprobarPrecio(precio);
        this.stock = comprobarStock(stock);
        this.activo = true;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public int getStock() {
        return stock;
    }

    public String comprobarNombre(String nombre) {
        if (nombre == null || nombre.isBlank()) {
            System.out.println("El nombre no puede estar vacio");
        }
        return nombre;
    }

    public int comprobarStock(int stock) {
        if (stock <= 0) {
            System.out.println("La stock no puede ser negativo");
        }
        return stock;
    }

    public double comprobarPrecio(double precio) {
        if (precio < 0) {
            System.out.println("El precio no puede ser inferior a 0");
        }
        return precio;
    }

    public boolean tieneStock() {
        return this.stock > 0;
    }

    public void reducirStock(int cantidad) {
        if (cantidad <= 0) {
            System.out.println("La cantidad debe ser mayor que 0");
            return;
        }

        if (cantidad > this.stock) {
            System.out.println("No hay stock suficiente");
            return;
        }

        this.stock -= cantidad;
    }

    public void aumentarStock(int cantidad) {
        if (cantidad <= 0) {
            System.out.println("La cantidad debe ser mayor que 0");
            return;
        }

        this.stock += cantidad;
    }

    public double calcularValorInventario() {
        return this.precio * this.stock;
    }

    public void desactivar() {
        this.activo = false;
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre + "\nPrecio : " + precio + "\nStock: " + stock
                + "\nActivo: " + activo;
    }

}
