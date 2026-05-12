package com.bootcamp.practicaSpringboot.repository;

import com.bootcamp.practicaSpringboot.model.Incidencia;

public interface IRepositorioIncidencias {
    public void crear(Incidencia incidencia);

    public Incidencia consultar(int id);

    public void modificar(int id, Incidencia incidencia);
}
