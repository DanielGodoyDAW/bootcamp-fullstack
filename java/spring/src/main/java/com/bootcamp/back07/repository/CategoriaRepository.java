package com.bootcamp.back07.repository;

import com.bootcamp.back07.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    List<Categoria> findByActivoTrue();
    List<Categoria> findByActivoFalse();

    List<Categoria> findByNombreContainingIgnoreCase(String texto);
    boolean existsByNombreIgnoreCase(String texto);
}
