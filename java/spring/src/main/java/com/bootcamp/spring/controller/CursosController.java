package com.bootcamp.spring.controller;

import com.bootcamp.spring.dto.CrearCursoRequest;
import com.bootcamp.spring.exception.CursoNoEncontradoException;
import com.bootcamp.spring.model.Curso;
import com.bootcamp.spring.service.CursoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cursos")
public class CursosController {
    private final CursoService cursoService;

    public CursosController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    @GetMapping
    public List<Curso> listarCursos(){
        return cursoService.listarTodos();
    }

    @GetMapping("/buscar")
    public List<Curso> buscarPorPrecioMaximo(@RequestParam double precioMaximo){
        return cursoService.buscarPorPrecioMaximo(precioMaximo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> obtenercurso(@PathVariable Long id){
        return cursoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
        //.orElseThrow(() -> new CursoNoEncontradoException("Curso no encontrado"));
        //el orElseThroiw vale para lanzar una excepcion en caso de no encontrar el curso por id y se usa ese, porque usabamos un optional
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Curso crearCruso(@RequestBody CrearCursoRequest curso){
         return cursoService.crearCurso(curso);
    }
}
