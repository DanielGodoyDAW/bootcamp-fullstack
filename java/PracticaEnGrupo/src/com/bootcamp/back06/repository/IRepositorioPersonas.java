package com.bootcamp.back06.repository;

import com.bootcamp.back06.model.Incidencia;
import com.bootcamp.back06.model.Persona;

public interface IRepositorioPersonas {
    public void crear(Persona persona);

    public Persona consultar(int id);
}
