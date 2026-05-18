package com.bootcamp.back07.controller;

import com.bootcamp.back07.dto.*;
import com.bootcamp.back07.model.Categoria;
import com.bootcamp.back07.service.CategoriaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/categorias")
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping
    public List<CategoriaResponseDto> getAllCategorias(@RequestParam(required = false) Boolean activo) {
        return categoriaService.listarTodas(activo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaResponseDto> getCategoriaById(@PathVariable Long id) {
        CategoriaResponseDto response = categoriaService.buscarPorId(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/buscar")
    public List<CategoriaResponseDto> buscarPorNombre(@RequestParam String nombre) {
        return categoriaService.buscarPorNombre(nombre);
    }

    @PostMapping
    public ResponseEntity<CategoriaResponseDto> crearCategoria(@Valid @RequestBody CrearCategoriaRequest request) {
        CategoriaResponseDto categoria = categoriaService.crearCategoria(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(categoria);
    }

    @PatchMapping("/{id}/desactivar")
    public CategoriaResponseDto desactivar(@PathVariable Long id) {
        return categoriaService.desactivar(id);
    }

    @PutMapping("/{id}/update")
    public CategoriaResponseDto actualizar(@PathVariable Long id, @RequestBody ActualizarCategoriaRequestDto request) {
        return categoriaService.actualizarCategoria(id, request);
    }

    @DeleteMapping("/{id}/delete")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminarCategoria(@PathVariable Long id) {
        categoriaService.eliminarCategoria(id);
    }

}
