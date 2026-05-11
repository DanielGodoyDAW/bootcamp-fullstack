package com.bootcamp.spring.service;

import com.bootcamp.spring.dto.CrearCursoRequest;
import com.bootcamp.spring.model.Curso;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CursoService {
    private Long singuienteId = 1L;
    private final List<Curso> cursos = new ArrayList<>();

    public CursoService() {
        crearCurso(new CrearCursoRequest("Curso Java", 80, 199.99));
        crearCurso(new CrearCursoRequest("Curso Spring", 100, 299.99));
    }

    public List<Curso> listarTodos() {
        return cursos;
    }

    public List<Curso> listarActivos() {
        return cursos.stream()
                .filter(Curso::isActivo)
                .toList();
    }

    public Optional<Curso> buscarPorId(Long id) {
        return cursos.stream()
                .filter(curso -> curso.getId().equals(id))
                .findFirst();
    }

    public Curso crearCurso(CrearCursoRequest request){
        Curso curso = new Curso(
                singuienteId,
                request.getTitulo(),
                request.getDuracionHoras(),
                request.getPrecio()
        );
        cursos.add(curso);
        singuienteId++;
        return curso;
    }

    public List<Curso> buscarPorPrecioMaximo(double precioMaximo){
        return cursos.stream().filter(c -> c.getPrecio() <= precioMaximo).toList();
    }
}
