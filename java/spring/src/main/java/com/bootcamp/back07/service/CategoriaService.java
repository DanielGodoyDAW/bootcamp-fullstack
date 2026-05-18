package com.bootcamp.back07.service;

import com.bootcamp.back07.dto.ActualizarCategoriaRequestDto;
import com.bootcamp.back07.dto.CategoriaResponseDto;
import com.bootcamp.back07.dto.CrearCategoriaRequest;
import com.bootcamp.back07.exception.CategoriaNoEncontradaException;
import com.bootcamp.back07.exception.OperacionNoPermitidaException;
import com.bootcamp.back07.mapper.CategoriaMapper;
import com.bootcamp.back07.model.Categoria;
import com.bootcamp.back07.repository.CategoriaRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {
    private final CategoriaRepository repository;
    private final CategoriaMapper mapper;

    public CategoriaService(CategoriaRepository repository, CategoriaMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<CategoriaResponseDto> listarTodas(Boolean activo) {
        return repository.findAll().stream().filter(c -> activo == null || c.isActivo() == activo).map(mapper::toResponse).toList();
    }

    @Transactional
    public CategoriaResponseDto crearCategoria(CrearCategoriaRequest request) {
        if (repository.existsByNombreIgnoreCase(request.getNombre())) {
            throw new OperacionNoPermitidaException("Ya existe una categoria con el mismo nombre");
        }
        Categoria entity = repository.save(mapper.toEntity(request));
        return mapper.toResponse(entity);
    }

    public CategoriaResponseDto activar(Long id) {
        Categoria entity = buscarCategoriaPorId(id);
        entity.setActivo(true);
        repository.save(entity);
        return mapper.toResponse(entity);
    }

    public CategoriaResponseDto desactivar(Long id) {
        Categoria entity = buscarCategoriaPorId(id);
        entity.setActivo(false);
        repository.save(entity);
        return mapper.toResponse(entity);
    }

    public List<CategoriaResponseDto> buscarPorNombre(String texto) {
        if (texto == null || texto.isBlank()) {
            throw new IllegalArgumentException("El texto de búsqueda es obligatorio");
        }
        return repository.findByNombreContainingIgnoreCase(texto.trim()).stream().map(mapper::toResponse).toList();
    }

    @Transactional
    public CategoriaResponseDto actualizarCategoria(Long id, ActualizarCategoriaRequestDto request) {
        Categoria entity = buscarCategoriaPorId(id);
        entity.actualizarDatos(request.getNombre(), request.getDescripcion());
        return mapper.toResponse(entity);
    }

    public CategoriaResponseDto buscarPorId(Long id) {
        return mapper.toResponse(buscarCategoriaPorId(id));
    }

    public void eliminarCategoria(Long id) {
        Categoria entity = buscarCategoriaPorId(id);
        repository.delete(entity);
    }

    public Categoria buscarCategoriaPorId(Long id) {
        return repository.findById(id).orElseThrow(() -> new CategoriaNoEncontradaException("No existe una categoría con id " + id));
    }

}
