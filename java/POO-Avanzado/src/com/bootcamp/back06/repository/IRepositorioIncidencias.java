package com.bootcamp.back06.repository;

import com.bootcamp.back06.model.Incidencia;

public interface IRepositorioIncidencias {
    public void crear(Incidencia incidencia);

    public Incidencia consultar(int id);

    public void modificar(int id, Incidencia incidencia);
}
