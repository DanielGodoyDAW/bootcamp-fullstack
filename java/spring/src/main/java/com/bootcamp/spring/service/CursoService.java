package com.bootcamp.spring.service;

import com.bootcamp.spring.dto.CrearCursoRequest;
import com.bootcamp.spring.dto.CursoResponse;
import com.bootcamp.spring.exception.CursoNoEncontradoException;
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

    /* funcion original
    public List<Curso> listarTodos() {
        return cursos;
    }
    */

    //modificamos la funcion listarTodos para protegerla
    public List<CursoResponse> listarTodos() {
        return cursos.stream()
                .map(this::convertirApiResponse)
                .toList();
    }
    //creamos un metodo privado para convertir un curso en cursoResponse
    private CursoResponse convertirApiResponse(Curso curso) {
        return new CursoResponse(
                curso.getId(),
                curso.getDuracionHoras(),
                curso.getTitulo(),
                curso.getPrecio(),
                curso.isActivo()
        );
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


    //modificamos el buscarId con la nueva funcionalidad
    /*
    public Optional<CursoResponse> buscarPorId(Long id) {
        return cursos.stream()
                .filter(curso -> curso.getId().equals(id))
                .map(this::convertirApiResponse)
                .findFirst();
    }*/

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

    public Curso desactivarCurso(Long id){
        Curso curso = buscarPorId(id)
                .orElseThrow(() -> new CursoNoEncontradoException("Curso no encontrado"));
        curso.desctivar();
        return curso;
    }
}
