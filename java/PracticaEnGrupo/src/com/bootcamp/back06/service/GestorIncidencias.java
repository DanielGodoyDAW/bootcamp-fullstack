package com.bootcamp.back06.service;

import com.bootcamp.back06.model.Incidencia;
import com.bootcamp.back06.repository.IRepositorioIncidencias;
import com.bootcamp.back06.repository.RepositorioIncidenciasMemoria;

public class GestorIncidencias {
    private IRepositorioIncidencias repositorio;

    public GestorIncidencias(IRepositorioIncidencias repositorio) {
        this.repositorio = repositorio;
    }

    public void registrar(Incidencia incidencia) {
        repositorio.crear(incidencia);
    }

    public Incidencia consultar(int id) {
        return repositorio.consultar(id);
    }

    public void gestionar(int id, Incidencia incidencia) {
        repositorio.modificar(id, incidencia);
    }

    public String mostrar(int id) {
        return repositorio.consultar(id).toString();
    }
}
