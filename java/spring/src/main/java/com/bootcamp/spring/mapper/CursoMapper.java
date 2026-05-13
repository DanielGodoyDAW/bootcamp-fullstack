package com.bootcamp.spring.mapper;

import com.bootcamp.spring.dto.CrearCursoRequest;
import com.bootcamp.spring.dto.CursoResponse;
import com.bootcamp.spring.entity.Curso;
import org.springframework.stereotype.Component;

@Component
public class CursoMapper {
    public Curso toEntity(CrearCursoRequest request){
        return new Curso(
                request.getTitulo(),
                request.getDuracionHoras(),
                request.getPrecio()
        );
    }

    public CursoResponse toResponse(Curso curso){
        return new CursoResponse(
                curso.getId(),
                curso.getDuracionHoras(),
                curso.getTitulo(),
                curso.getPrecio(),
                curso.isActivo(),
                curso.esIntensivo(),
                curso.esIntensivo()
        );
    }
}
