package com.bootcamp.back06.repository;

import com.bootcamp.back06.model.Incidencia;
import com.bootcamp.back06.model.Persona;
import com.bootcamp.back06.utils.ArrayManager;

public class RepositorioPersonasMemoria implements IRepositorioPersonas{
    private Persona[] personas = new Persona[0];
    private int idActual;

    @Override
    public void crear(Persona persona) {
        personas = ArrayManager.expandirArray(personas, idActual + 1);
        persona.setId(idActual);
        personas[idActual] = persona;
        ++idActual;
    }

    @Override
    public Persona consultar(int id) {
        return personas[id];
    }
}
