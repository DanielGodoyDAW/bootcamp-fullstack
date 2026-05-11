package com.bootcamp.practicaSpringboot.service;

import com.bootcamp.practicaSpringboot.model.Persona;
import com.bootcamp.practicaSpringboot.repository.IRepositorioPersonas;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class PersonaServices {

    private final IRepositorioPersonas repositorio;

    public PersonaServices(IRepositorioPersonas repositorio) {
        this.repositorio = repositorio;
    }

    public Persona crear(Persona persona) {
        return repositorio.crear(persona);
    }

    public List<Persona> buscarTodos() {
        return repositorio.buscarTodos();
    }

    public Optional<Persona> buscarPorId(Long id) {
        return repositorio.buscarPorId(id);
    }
}
