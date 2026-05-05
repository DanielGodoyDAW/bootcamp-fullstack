public class CursoEj2 {
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;

    public CursoEj2() {

    }

    public CursoEj2(String titulo, int duracionHoras, double precio) {
        this.titulo = comprobarTitulo(titulo);
        this.duracionHoras = comprobarDuracion(duracionHoras);
        this.precio = comprobarPrecio(precio);
        this.activo = true;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getDuracionHoras() {
        return duracionHoras;
    }

    public double getPrecio() {
        return precio;
    }

    public boolean desactivar() {
        return this.activo = false;
    }

    public boolean esIntensivo() {
        return this.duracionHoras >= 40;
    }

    public String comprobarTitulo(String titulo) {
        if (titulo == null || titulo.isBlank()) {
            System.out.println("El titulo no puede estar vacio");
            return "Sin Curso";
        }
        return titulo;
    }

    public int comprobarDuracion(int duracion) {
        if (duracion <= 0) {
            System.out.println("La duracion del curso debe ser mayor");
            return 1;
        }
        return duracion;
    }

    public double comprobarPrecio(double precio) {
        if (precio < 0) {
            System.out.println("El precio no puede ser inferior a 0");
            return 0;
        }
        return precio;
    }

    @Override
    public String toString() {
        return "Titulo: " + titulo + "\nDuracion del curso: " + duracionHoras + "\nPrecio: " + precio
                + "\nActivo: " + activo;
    }

}
