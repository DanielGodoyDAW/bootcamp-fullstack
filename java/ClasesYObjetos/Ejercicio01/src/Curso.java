public class Curso {
    String titulo;
    int duracionHoras;
    double precio;
    boolean activo;

    @Override
    public String toString() {
        return "Titulo: " +titulo + "\nDuracion del curso: " +duracionHoras + "\nPrecio: " +precio 
        + "\nActivo: "+activo ;
    }

}
