package com.bootcamp.spring.service;

import com.bootcamp.spring.dto.ActualizarCursoRequest;
import com.bootcamp.spring.dto.CrearCursoRequest;
import com.bootcamp.spring.dto.CursoResponse;
import com.bootcamp.spring.exception.CursoNoEncontradoException;
import com.bootcamp.spring.entity.Curso;
import com.bootcamp.spring.mapper.CursoMapper;
import com.bootcamp.spring.repository.CursoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CursoService {
    private Long singuienteId = 1L;
    private final List<Curso> cursos = new ArrayList<>();
    private CursoRepository cursoRepository;
    private CursoMapper cursoMapper;

    public CursoService(CursoRepository cursoRepository, CursoMapper cursoMapper) {
        this.cursoRepository = cursoRepository;
        this.cursoMapper = cursoMapper;
        /*
        crearCurso(new CrearCursoRequest("Java", 80, 199.99));
        crearCurso(new CrearCursoRequest("Spring", 100, 299.99));
        crearCurso(new CrearCursoRequest("Sql", 200, 259.99));
        crearCurso(new CrearCursoRequest("JavaScript", 30, 0));
        crearCurso(new CrearCursoRequest("Testing Backend", 40, 129.99));
         */
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
        List<Curso> cursos;
        if (activo == null) {
            cursos = cursoRepository.findAll();
        } else if (activo) {
            cursos = cursoRepository.findByActivoTrue();
        } else {
            cursos = cursoRepository.findByActivoFalse();
        }
        return cursos.stream()
                //.filter(curso -> activo == null || curso.isActivo() == activo)
                .map(cursoMapper::toResponse)
                .toList();
    }

    /*
    modificamos la funcion listarTodos para protegerla y agregamos el boolean con 3 posibles valores, null, true y false
    public List<CursoResponse> listarTodos(Boolean activo) {
        return cursos.stream()
                .filter(curso -> activo == null || curso.isActivo() == activo)
                .map(cursoMapper::toResponse)
                .toList();
    }
     */

    //creamos un metodo privado para convertir un curso en cursoResponse
    /*
    private CursoResponse convertirApiResponse(Curso curso) {
        return new CursoResponse(
                curso.getId(),
                curso.getDuracionHoras(),
                curso.getTitulo(),
                curso.getPrecio(),
                curso.isActivo()
        );
    }
    */
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
        return cursoMapper.toResponse(curso);
    }

    private Curso buscarPorId(Long id) {
        return cursoRepository.findById(id)
                .orElseThrow(()-> new CursoNoEncontradoException("Curso no encontrado"));
        /*
        return cursos.stream()
                .filter(curso -> curso.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new CursoNoEncontradoException("Curso no encontrado con id: " + id));
         */
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

    /*
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
     */

    public CursoResponse crearCurso(CrearCursoRequest request){
        /*
        Curso curso = new Curso(
                request.getTitulo(),
                request.getDuracionHoras(),
                request.getPrecio()
        );

         */
        Curso curso = cursoMapper.toEntity(request);
        cursoRepository.save(curso);
        /*
        cursos.add(curso);
        singuienteId++;
         */
        return cursoMapper.toResponse(curso);
    }

    public List<CursoResponse> buscarPorPrecioMaximo(double precioMaximo){
        if (precioMaximo < 0){
            throw new IllegalArgumentException("El precio maximo no puede ser negativo");
        }
        List<Curso> cursos = cursoRepository.findByPrecioIsLessThanEqualAndActivoTrue(precioMaximo);
        return cursos.stream()
                .filter(c -> c.getPrecio() <= precioMaximo)
                .map(cursoMapper::toResponse)
                .toList();
    }

    public List<CursoResponse> listarGratuitos(){
        List<Curso> cursos = cursoRepository.findByPrecioAndActivoTrue(0);
        return cursos.stream()
                .filter(Curso::isActivo)
                .filter(Curso::esGratuito)
                .map(cursoMapper::toResponse)
                .toList();
    }

    /*
    public List<CursoResponse> listarGratuitos(){
        return cursos.stream()
                .filter(Curso::isActivo)
                .filter(Curso::esGratuito)
                .map(cursoMapper::toResponse)
                .toList();
    }
     */

    public List<CursoResponse> listarIntensivos(){
        List<Curso> cursos = cursoRepository.findByDuracionHorasIsGreaterThanEqualAndActivoTrue(86);
        return cursos.stream()
                .map(cursoMapper::toResponse)
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
        cursoRepository.save(curso);
        return cursoMapper.toResponse(curso);
    }

    public CursoResponse activarCurso(Long id){
        Curso curso = buscarPorId(id);
        curso.activar();
        cursoRepository.save(curso);
        return cursoMapper.toResponse(curso);
    }
    public CursoResponse actualizarCurso(Long id, ActualizarCursoRequest request){
        Curso curso = buscarPorId(id);
        curso.actualizarDatos(request.getTitulo(), request.getDuracionHoras(), request.getPrecio());
        cursoRepository.save(curso);
        return cursoMapper.toResponse(curso);
    }

    @Transactional
    public void eliminarCurso(Long id){
        Curso curso = buscarPorId(id);
        //cursos.remove(curso); //eliminacion fisica
        //curso.desctivar(); //eliminacion logica
        //cursoRepository.deleteById(id);
        curso.desctivar();
        cursoRepository.save(curso);
    }
}
