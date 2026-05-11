import com.bootcamp.back06.model.Incidencia;
import com.bootcamp.back06.model.Persona;
import com.bootcamp.back06.repository.RepositorioIncidenciasMemoria;
import com.bootcamp.back06.repository.RepositorioPersonasMemoria;
import com.bootcamp.back06.service.GestorIncidencias;
import com.bootcamp.back06.service.GestorPersonas;
import com.bootcamp.back06.utils.DataInitializer;


//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
    	DataInitializer datos = new DataInitializer();
        GestorIncidencias gestorI = new GestorIncidencias(new RepositorioIncidenciasMemoria());
        GestorPersonas gestorP = new GestorPersonas(new RepositorioPersonasMemoria());
    	datos.cargarDatosPrueba(gestorI, gestorP);

        /*Persona anselmo = new Persona();
        Incidencia incidencia = new Incidencia();
        incidencia.setPersonaResponsable(anselmo);
        incidencia.setDescripcion("Algo muy chungo");

        gestorP.registrar(anselmo);
        gestorI.registrar(incidencia);

        System.out.println(gestorI.mostrar(0));*/
        
    	
        
    }
}