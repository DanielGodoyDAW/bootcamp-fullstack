package com.bootcamp.back06.utils;

import com.bootcamp.back06.model.Incidencia;
import com.bootcamp.back06.model.Persona;
import com.bootcamp.back06.service.GestorIncidencias;
import com.bootcamp.back06.service.GestorPersonas;

public class DataInitializer {
    public static void cargarDatosPrueba(GestorIncidencias gestorI, GestorPersonas gestorP) {
    	Persona responsable1 = new Persona();
    	Persona responsable2 = new Persona();
    	Persona responsable3 = new Persona();
    	gestorP.registrar(responsable1);
    	gestorP.registrar(responsable2);
    	gestorP.registrar(responsable3);
    	Incidencia incidencia1 = new Incidencia();
    	incidencia1.setDescripcion("Fallo en el servidor");
    	incidencia1.setPrioridad((byte)3);
    	incidencia1.setEstado("Abierta");
    	incidencia1.setPersonaResponsable(responsable1);
        gestorI.registrar(incidencia1);
        
    	Incidencia incidencia2 = new Incidencia();
    	incidencia2.setDescripcion("Teclado roto");
    	incidencia2.setPrioridad((byte)2);
    	incidencia2.setEstado("Cerrada");
    	incidencia2.setPersonaResponsable(responsable2);
        gestorI.registrar(incidencia2);
        
        System.out.println(">> Datos de prueba cargados correctamente.");
    }
}