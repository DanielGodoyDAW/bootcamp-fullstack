package com.bootcamp.spring.repository;

import com.bootcamp.spring.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Curso, Long> {
}
