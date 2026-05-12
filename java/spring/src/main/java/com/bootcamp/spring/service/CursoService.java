package com.bootcamp.spring.service;

import com.bootcamp.spring.dto.ActualizarCursoRequest;
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
        crearCurso(new CrearCursoRequest("Java", 80, 199.99));
        crearCurso(new CrearCursoRequest("Spring", 100, 299.99));
        crearCurso(new CrearCursoRequest("Sql", 200, 259.99));
        crearCurso(new CrearCursoRequest("JavaScript", 30, 0));
        crearCurso(new CrearCursoRequest("Testing Backend", 40, 129.99));
    }

    /* funcion original
    public List<Curso> listarTodos() {
        return cursos;
    }
    */

    /*
    public List<CursoResponse> listarTodos() {
        return cursos.stream()
                .filter(Curso::isActivo)
                .map(this::convertirApiResponse)
                .toList();
    }
     */

    //modificamos la funcion listarTodos para protegerla y agregamos el boolean con 3 posibles valores, null, true y false
    public List<CursoResponse> listarTodos(Boolean activo) {
        return cursos.stream()
                .filter(curso -> activo == null || curso.isActivo() == activo)
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

    /*
    public List<Curso> listarActivos() {
        return cursos.stream()
                .filter(Curso::isActivo)
                .toList();
    }
     */

    public CursoResponse obtenerPorId(Long id) {
        Curso curso = buscarPorId(id);
        return convertirApiResponse(curso);
    }

    private Curso buscarPorId(Long id) {
        return cursos.stream()
                .filter(curso -> curso.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new CursoNoEncontradoException("Curso no encontrado con id: " + id));
    }

    /* funcion original antes de modificarla
    public Optional<Curso> buscarPorId(Long id) {
        return cursos.stream()
                .filter(curso -> curso.getId().equals(id))
                .findFirst();
    }
     */


    //modificamos el buscarId con la nueva funcionalidad
    /*
    public Optional<CursoResponse> buscarPorId(Long id) {
        return cursos.stream()
                .filter(curso -> curso.getId().equals(id))
                .map(this::convertirApiResponse)
                .findFirst();
    }*/

    public CursoResponse crearCurso(CrearCursoRequest request){
        Curso curso = new Curso(
                singuienteId,
                request.getTitulo(),
                request.getDuracionHoras(),
                request.getPrecio()
        );
        cursos.add(curso);
        singuienteId++;
        return convertirApiResponse(curso);
    }

    public List<CursoResponse> buscarPorPrecioMaximo(double precioMaximo){
        return cursos.stream()
                .filter(c -> c.getPrecio() <= precioMaximo)
                .map(this::convertirApiResponse)
                .toList();
    }

    public List<CursoResponse> listarGratuitos(){
        return cursos.stream()
                .filter(Curso::isActivo)
                .filter(Curso::esGratuito)
                .map(this::convertirApiResponse)
                .toList();
    }

    public List<CursoResponse> listarIntensivos(){
        return cursos.stream()
                .filter(Curso::isActivo)
                .filter(Curso::esIntensivo)
                .map(this::convertirApiResponse)
                .toList();
    }

    /*
    public List<Curso> buscarPorPrecioMaximo(double precioMaximo){
        return cursos.stream().filter(c -> c.getPrecio() <= precioMaximo).toList();
    }
     */

    public CursoResponse desactivarCurso(Long id){
        Curso curso = buscarPorId(id);
        curso.desctivar();
        return convertirApiResponse(curso);
    }

    public CursoResponse activarCurso(Long id){
        Curso curso = buscarPorId(id);
        curso.desctivar();
        return convertirApiResponse(curso);
    }
    public CursoResponse actualizarCurso(Long id, ActualizarCursoRequest request){
        Curso curso = buscarPorId(id);
        curso.actualizarDatos(request.getTitulo(), request.getDuracionHoras(), request.getPrecio());
        return convertirApiResponse(curso);
    }

    public void eliminarCurso(Long id){
        Curso curso = buscarPorId(id);
        //cursos.remove(curso); //eliminacion fisica
        curso.desctivar(); //eliminacion logica
    }
}
