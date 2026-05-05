public class Main {
    public static void main(String[] args) {
        Curso javaCurso = new Curso();
        javaCurso.titulo = "Java Backend";
        javaCurso.duracionHoras = 80;
        javaCurso.precio = 299.00;
        javaCurso.activo = true;

        System.out.println(javaCurso);
    }
}
