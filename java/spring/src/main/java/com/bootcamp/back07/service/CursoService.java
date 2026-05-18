package com.bootcamp.back07.service;

import com.bootcamp.back07.dto.ActualizarCursoRequest;
import com.bootcamp.back07.dto.CrearCursoRequest;
import com.bootcamp.back07.dto.CursoResponse;
import com.bootcamp.back07.exception.CategoriaNoEncontradaException;
import com.bootcamp.back07.exception.CursoNoEncontradoException;
import com.bootcamp.back07.mapper.CursoMapper;
import com.bootcamp.back07.model.Categoria;
import com.bootcamp.back07.model.Curso;
import com.bootcamp.back07.repository.CategoriaRepository;
import com.bootcamp.back07.repository.CursoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {

    private CursoRepository repository;
    private CursoMapper cursoMapper;
    private CategoriaService categoriaService;

    public CursoService(CursoRepository repository, CursoMapper cursoMapper, CategoriaService categoriaService) {

        this.cursoMapper = cursoMapper;
        this.repository = repository;
        this.categoriaService = categoriaService;
//        cursos = List.of(new Curso(1L, "Curso Java", 80, 199.99),new Curso(2L, "Curso Java", 80, 199.99), new Curso(3L, "Curso Java", 80, 199.99));
    }

    public List<CursoResponse> listarTodo(Boolean activo) {
        List<Curso> cursos;
        if (activo == null)
            cursos = repository.findAll();
        else if (activo) {
            cursos = repository.findByActivoTrue();
        } else {
            cursos = repository.findByActivoFalse();
        }
        return cursos.stream().map(cursoMapper::toResponse).toList();
    }

    public CursoResponse buscarPorId(Long id) {
        Curso entity = findById(id);
        return cursoMapper.toResponse(entity);
    }

    public CursoResponse crearCurso(CrearCursoRequest request) {
        Categoria categoria = categoriaService.buscarCategoriaPorId(request.getCategoria());
        Curso curso = new Curso(request.getTitulo(), request.getDuracionHoras(), request.getPrecio(), categoria);
        repository.save(curso);
        return cursoMapper.toResponse(curso);
    }

    public List<CursoResponse> buscarPorPrecioMaximo(double precioMaximo) {
        if (precioMaximo < 0)
            throw new IllegalArgumentException("No puedo buscar por precios inferiores a 0");
        List<Curso> cursos = repository.findByPrecioIsLessThanEqualAndActivoTrue(precioMaximo);
        return cursos.stream().map(cursoMapper::toResponse).toList();
    }

    public CursoResponse actualizarCurso(Long id, ActualizarCursoRequest request) {
        Curso entity = findById(id);
        Categoria categoria = categoriaService.buscarCategoriaPorId(request.getCategoria());
        entity.actualizarDatos(
                request.getTitulo(),
                request.getDuracionHoras(),
                request.getPrecio(),
                categoria
        );
        repository.save(entity);
        return cursoMapper.toResponse(entity);
    }

    public void eliminarCurso(Long id) {
        Curso entity = findById(id);
        repository.delete(entity);
    }

    @Transactional
    public CursoResponse desactivarCurso(Long id) {
        Curso entity = findById(id);
        entity.desactivar();
        repository.save(entity);
        return cursoMapper.toResponse(entity);
    }

    public void activarCurso(Long id) {
        Curso entity = findById(id);
        entity.activar();
        repository.save(entity);
    }

    public List<CursoResponse> listarGratuitos() {
        List<Curso> cursos = repository.findByPrecioAndActivoTrue(0d);
        return cursos.stream().map(cursoMapper::toResponse).toList();
    }

    public List<CursoResponse> listarIntensivos() {
     //   List<Curso> cursos = repository.findByActivoTrueAndIntensivoTrue();
       // return cursos.stream().map(cursoMapper::toResponse).toList();
        return null;
    }

    private Curso findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new CursoNoEncontradoException("No se ha encontrado el curso"));
    }

}