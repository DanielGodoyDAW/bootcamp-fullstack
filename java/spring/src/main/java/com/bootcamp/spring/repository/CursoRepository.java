package com.bootcamp.spring.repository;

import com.bootcamp.spring.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {
    public List<Curso> findByActivoTrue();
    public List<Curso> findByActivoFalse();
    public List<Curso> findByPrecioAndActivoTrue(double precio);
    public List<Curso> findByPrecioIsLessThanEqualAndActivoTrue(double precio);
    public List<Curso> findByDuracionHorasIsGreaterThanEqualAndActivoTrue(int horas);

    @Query("""
            SELECT c FROM curso c 
            WHERE (c.activo IS NULL OR c.activo = :activo) 
            AND (:texto IS NULL OR c.titulo = CONCAT('%', LOWER(:texto), '%')) 
            AND (:precioMaximo IS NULL OR c.precio <= :precioMaximo) 
            AND (:duracionMinima IS NULL OR c.duracionHoras <= :duracionMinima)""")

    public List<Curso> buscarConFiltros(
            @Param("activo") Boolean activo,
            @Param("texto") String texto,
            @Param("precioMaximo") Double precioMaximo,
            @Param("duracionMINIMA") Integer duracionMinima
    );
}
