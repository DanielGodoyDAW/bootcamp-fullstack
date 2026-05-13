package com.bootcamp.spring.controller;

import com.bootcamp.spring.dto.ActualizarCursoRequest;
import com.bootcamp.spring.dto.CrearCursoRequest;
import com.bootcamp.spring.dto.CursoResponse;
import com.bootcamp.spring.service.CursoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cursos")
public class CursosController {
    private final CursoService cursoService;

    // inyeccion de dependencias
    public CursosController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    @GetMapping
    public List<CursoResponse> listarCursos(@RequestParam(required = false) Boolean activo){
        return cursoService.listarTodos(activo);
    }
    /*
    @GetMapping
    public List<Curso> listarCursos(){
        return cursoService.listarTodos();
    }
     */

    @GetMapping("/buscar")
    public List<CursoResponse> buscarPorPrecioMaximo(@RequestParam double precioMaximo){
        return cursoService.buscarPorPrecioMaximo(precioMaximo);
    }

    @GetMapping("/gratuitos")
    public List<CursoResponse> listarGratuitos(){
        return cursoService.listarGratuitos();
    }

    @GetMapping("/intensivos")
    public List<CursoResponse> listarIntensivos(){
        return cursoService.listarIntensivos();
    }

    //@GetMapping("/{id}")
    //public ResponseEntity<Curso> obtenerCurso(@PathVariable Long id){
    //    return cursoService.buscarPorId(id)
    //            .map(ResponseEntity::ok)
    //            .orElse(ResponseEntity.notFound().build());
        //.orElseThrow(() -> new CursoNoEncontradoException("Curso no encontrado"));
        //el orElseThroiw vale para lanzar una excepcion en caso de no encontrar el curso por id y se usa ese, porque usabamos un optional
    //}

    @GetMapping("/{id}")
    public CursoResponse obtenerCurso(@PathVariable Long id){
        return cursoService.obtenerPorId(id);
        //.orElseThrow(() -> new CursoNoEncontradoException("Curso no encontrado"));
        //el orElseThroiw vale para lanzar una excepcion en caso de no encontrar el curso por id y se usa ese, porque usabamos un optional
    }

    /*
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CursoResponse crearCruso(@RequestBody CrearCursoRequest curso){
         return cursoService.crearCurso(curso);
    }

     */

    @PatchMapping("/{id}/desactivar")
    public CursoResponse desactivar(@PathVariable Long id){
        return cursoService.desactivarCurso(id);
    }

    @PatchMapping("/{id}/activar")
    public CursoResponse activar(@PathVariable Long id){
        return cursoService.activarCurso(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCurso(@PathVariable Long id){
        cursoService.eliminarCurso(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<CursoResponse> crearCursoResponseEntity(@RequestBody CrearCursoRequest curso){
        CursoResponse cursoCreado = cursoService.crearCurso(curso);
        return ResponseEntity.status(HttpStatus.CREATED).body(cursoCreado);
    }

    @PutMapping("/{id}")
    public CursoResponse actualizarCurso(@PathVariable Long id, @RequestBody ActualizarCursoRequest request){
        return cursoService.actualizarCurso(id, request);
    }
}
