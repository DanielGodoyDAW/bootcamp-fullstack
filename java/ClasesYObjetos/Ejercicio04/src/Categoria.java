public class Categoria {
    private String nombre;
    private String descripcion;
    private boolean activa;

    public Categoria() {

    }

    public Categoria(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.activa = true;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void desactivar() {
        this.activa = false;
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre
                + "\nDescripcion : " + descripcion
                + "\nActivo: " + activa;
    }
}
