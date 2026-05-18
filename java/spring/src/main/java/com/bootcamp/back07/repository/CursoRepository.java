package com.bootcamp.back07.repository;

import com.bootcamp.back07.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    public List<Curso> findByActivoTrue();
    public List<Curso> findByActivoFalse();

    public List<Curso> findByPrecioAndActivoTrue(Double precio);
    public List<Curso> findByPrecioIsLessThanEqualAndActivoTrue(Double precioMaximo);

    public List<Curso> findByDuracionHorasIsGreaterThanEqualAndActivoTrue(int duracionHoras);

    @Query("SELECT c FROM Curso c WHERE (activo IS NULL OR c.activo = :activo) AND (:texto IS NULL OR LOWER(c.titulo) LIKE CONCAT('%', LOWER(:texto), '%')) AND (:precioMaximo IS NULL OR c.precio <= :precioMaximo) AND (:duracionMinima IS NULL OR c.duracionHoras <= :duracionMinima)")
    public List<Curso> findWithFilters(
            @Param("activo") Boolean activo,
            @Param("texto") String texto,
            @Param("precioMaximo") Double precioMáximo,
            @Param("duracionMinima") Integer duracionHoras
    );
}
