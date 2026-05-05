public class CategoriaEj6 {
    private String nombre;
    private String descripcion;
    private boolean activa;

    public CategoriaEj6() {

    }

    public CategoriaEj6(String nombre, String descripcion) {
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
    
    public boolean isActiva() {
        return activa;
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre
                + "\nDescripcion : " + descripcion
                + "\nActivo: " + activa;
    }
}
