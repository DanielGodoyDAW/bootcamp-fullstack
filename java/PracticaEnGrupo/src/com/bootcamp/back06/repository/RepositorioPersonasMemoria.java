package com.bootcamp.back06.repository;

import java.util.ArrayList;

import com.bootcamp.back06.model.Incidencia;
import com.bootcamp.back06.model.Persona;
// import com.bootcamp.back06.utils.ArrayManager;

public class RepositorioPersonasMemoria implements IRepositorioPersonas{
    //private Persona[] personas = new Persona[0];
	private ArrayList<Persona> personas = new ArrayList<Persona>();
    //private int idActual;

    @Override
    public void crear(Persona persona) {
        // personas = ArrayManager.expandirArray(personas, idActual + 1);
        //persona.setId(idActual);
        //personas[idActual] = persona;
        //++idActual;
    	personas.add(persona);
    }

    @Override
    public Persona consultar(int id) {
        //return personas[id];		
    	for (int i = 0 ; i <personas.size() ; i++) {
    		Persona persona = personas.get(i);
    		if (persona.getId() == id) {
    			return persona;
    		}
    	}
    	return null;
    }
}
