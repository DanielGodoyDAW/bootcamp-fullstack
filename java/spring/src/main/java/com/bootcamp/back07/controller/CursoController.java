package com.bootcamp.back07.controller;

import com.bootcamp.back07.dto.ActualizarCursoRequest;
import com.bootcamp.back07.dto.CrearCursoRequest;
import com.bootcamp.back07.dto.CursoResponse;
import com.bootcamp.back07.service.CursoService;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cursos")
public class CursoController {

    private final CursoService cursoService;

    public CursoController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    @GetMapping
    public List<CursoResponse> getAllCursos(@RequestParam(required = false) Boolean activo) {
        return cursoService.listarTodo(activo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CursoResponse> getCursoById(@PathVariable Long id) {
        CursoResponse response = cursoService.buscarPorId(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/buscar")
    public List<CursoResponse> buscarPorPrecioMaximo(@RequestParam double precioMaximo) {
        return cursoService.buscarPorPrecioMaximo(precioMaximo);
    }

    @PostMapping
    public ResponseEntity<CursoResponse> crearCurso(@Valid @RequestBody CrearCursoRequest request) {
        CursoResponse cursoCreado = cursoService.crearCurso(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(cursoCreado);
    }

    @PatchMapping("/{id}/desactivar")
    public CursoResponse desactivar(@PathVariable Long id) {
        return cursoService.desactivarCurso(id);
    }

    @PutMapping("/{id}/update")
    public CursoResponse actualizar(@PathVariable Long id, @RequestBody ActualizarCursoRequest request) {
        return cursoService.actualizarCurso(id, request);
    }

    @DeleteMapping("/{id}/delete")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminarCurso(@PathVariable Long id) {
        cursoService.eliminarCurso(id);
    }

    @GetMapping("/gratuitos")
    public List<CursoResponse> listarGratuitos() {
        return cursoService.listarGratuitos();
    }

    @GetMapping("/intensivos")
    public List<CursoResponse> listarIntensivos() {
        return cursoService.listarIntensivos();
    }
}
