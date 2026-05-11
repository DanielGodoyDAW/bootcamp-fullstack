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
    
    public void cambiarDescripcion (int id, String descripcion) {
    	Incidencia incidencia = repositorio.consultar(id);
    	incidencia.setDescripcion(descripcion);
    	repositorio.modificar(id, incidencia);
    }

    public void cambiarPrioridad (int id, byte prioridad) {
    	Incidencia incidencia = repositorio.consultar(id);
    	incidencia.setPrioridad(prioridad);
    	repositorio.modificar(id, incidencia);
    }
    
    public void cambiarEstado (int id, String estado) {
    	Incidencia incidencia = repositorio.consultar(id);
    	incidencia.setEstado(estado);
    	repositorio.modificar(id, incidencia);
    }
}
