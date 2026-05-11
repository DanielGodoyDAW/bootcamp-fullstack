package com.bootcamp.back06.repository;

import com.bootcamp.back06.model.Incidencia;
import com.bootcamp.back06.utils.ArrayManager;

import java.util.Arrays;

public class RepositorioIncidenciasMemoria implements IRepositorioIncidencias{

    private Incidencia[] incidencias = new Incidencia[0];
    private int idActual;

    @Override
    public void crear(Incidencia incidencia) {
        incidencias = ArrayManager.expandirArray(incidencias, idActual + 1);
        incidencia.setId(idActual);
        incidencias[idActual] = incidencia;
        ++idActual;
    }

    @Override
    public Incidencia consultar(int id) {
        return incidencias[id];
    }

    @Override
    public void modificar(int id, Incidencia incidencia) {
        incidencias[id] = incidencia;
    }
}
