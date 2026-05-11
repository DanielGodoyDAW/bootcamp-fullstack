package com.bootcamp.practicaSpringboot.controller;

import com.bootcamp.practicaSpringboot.model.Persona;
import com.bootcamp.practicaSpringboot.service.PersonaServices;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personas")
public class PersonaController {

    private final PersonaServices gestor;

    public PersonaController(PersonaServices gestor) {
        this.gestor = gestor;
    }

    @PostMapping
    public Persona crear(@RequestBody Persona persona) {
        return gestor.crear(persona);
    }

    @GetMapping
    public List<Persona> buscarTodos() {
        return gestor.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Persona> buscarPorId(@PathVariable Long id) {
        return gestor.buscarPorId(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}
