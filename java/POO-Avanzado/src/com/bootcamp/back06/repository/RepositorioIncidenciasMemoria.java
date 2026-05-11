package com.bootcamp.back06.repository;

import com.bootcamp.back06.model.Incidencia;
//import com.bootcamp.back06.utils.ArrayManager;

import java.util.ArrayList;
import java.util.Arrays;

public class RepositorioIncidenciasMemoria implements IRepositorioIncidencias {

	// private Incidencia[] incidencias = new Incidencia[0];
	// private int idActual;
	private ArrayList<Incidencia> incidencias = new ArrayList<Incidencia>();

	@Override
	public void crear(Incidencia incidencia) {
		// incidencias = ArrayManager.expandirArray(incidencias, idActual + 1);
		// incidencia.setId(idActual);
		// incidencias[idActual] = incidencia;
		// ++idActual;
		incidencias.add(incidencia);
	}

	@Override
	public Incidencia consultar(int id) {
		// return incidencias[id];
		for (int i = 0; i < incidencias.size(); i++) {
			Incidencia incidencia = incidencias.get(i);
			if (incidencia.getId() == id) {
				return incidencia;
			}
		}
		return null;
	}

	@Override
	public void modificar(int id, Incidencia incidencia) {
		// incidencias[id] = incidencia;
		int indice = buscarIndice(id);
		Incidencia incidenciaModificar = consultar(id);
		incidencias.set(indice, incidencia);
	}

	public int buscarIndice(int id) {
    	for (int i=0; i<incidencias.size(); i++) {
    		Incidencia incidencia = incidencias.get(i);
    		if (incidencia.getId()==id) {
    			return i;
    		}
    }
    	return -1;
}
}