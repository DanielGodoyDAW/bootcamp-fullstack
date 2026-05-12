package com.bootcamp.practicaSpringboot.repository;

import com.bootcamp.practicaSpringboot.model.Persona;

import java.util.List;
import java.util.Optional;

public class PersonaRepositorioMemoria implements IRepositorioPersonas{
    @Override
    public Persona crear(Persona persona) {
        return null;
    }

    @Override
    public Optional<Persona> buscarPorId(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Persona> buscarTodos() {
        return List.of();
    }
}
