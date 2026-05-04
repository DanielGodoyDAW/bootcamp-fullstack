public class AnalisisNotas {
    public static void main(String[] args) {
        
        int[] notas = {7, 4, 9, 6, 5};

        System.out.println("Estas son las notas ");
        mostrarNotas(notas);
        System.out.println("La suma de todas las notas es "+total(notas));
        System.out.println("La media es " + media(notas));
        System.out.println("La nota maxima es "+notaMaxima(notas));
        System.out.println("La nota minima es "+notaMinima(notas));
        System.out.println("Las notas aprobadas son " +aprobadas(notas));
        System.out.println("Las notas suspensas son "+suspensas(notas));

    }

    public static void mostrarNotas(int[] notas){
        for(int nota : notas){
            System.out.println(nota);
        }
    }


    public static int total(int[] notas){
        int resultado = 0;
        for(int nota : notas){
            resultado += nota;
        }
        return resultado;
    }

    public static double media(int[] notas){
        double resul = total(notas) / notas.length;
        return resul;
    }

    public static int notaMaxima(int[] notas){
        
        int resultado = notas[0];
        for(int nota : notas){
            if(nota > resultado){
                resultado = nota;
            }
        }
        
        return resultado;
    }

     public static int notaMinima(int[] notas){
        
        int resultado = notas[0];
        for(int nota : notas){
            if(nota < resultado){
                resultado = nota;
            }
        }
        
        return resultado;
    }

    public static int aprobadas(int[] notas){

        int resultado = 0;
        for(int nota : notas){
            if(nota >= 5){
                resultado++;
            }
        }
        return resultado;
    }

    public static int suspensas(int[] notas){

        int resultado = 0;
        for(int nota : notas){
            if(nota < 5){
                resultado++;
            }
        }
        return resultado;
    }
}
