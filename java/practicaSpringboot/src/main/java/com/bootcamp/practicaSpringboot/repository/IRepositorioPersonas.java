package com.bootcamp.practicaSpringboot.repository;

import com.bootcamp.practicaSpringboot.model.Persona;

import java.util.List;
import java.util.Optional;


public interface IRepositorioPersonas {
    public Persona crear(Persona persona);

    public Optional<Persona> buscarPorId(Long id);

    public List<Persona> buscarTodos();
}
