package com.bootcamp.back06.service;

import com.bootcamp.back06.model.Persona;
import com.bootcamp.back06.repository.IRepositorioPersonas;

public class GestorPersonas {
    private IRepositorioPersonas repositorio;

    public GestorPersonas(IRepositorioPersonas repositorio) {
        this.repositorio = repositorio;
    }

    public void registrar(Persona persona) {
        repositorio.crear(persona);
    }

    public Persona consultar(int id) {
        return repositorio.consultar(id);
    }

}
