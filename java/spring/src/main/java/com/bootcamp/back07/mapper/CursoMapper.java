package com.bootcamp.back07.mapper;

import com.bootcamp.back07.dto.CategoriaResponseDto;
import com.bootcamp.back07.dto.CategoriaResumenResponseDto;
import com.bootcamp.back07.dto.CrearCursoRequest;
import com.bootcamp.back07.dto.CursoResponse;
import com.bootcamp.back07.model.Categoria;
import com.bootcamp.back07.model.Curso;
import org.springframework.stereotype.Component;

@Component
public class CursoMapper {

    private CategoriaMapper categoriaMapper;

    public CursoMapper(CategoriaMapper categoriaMapper) {
        this.categoriaMapper = categoriaMapper;
    }

    public Curso toEntity(CrearCursoRequest request, Categoria categoria) {
        return new Curso(
                request.getTitulo(),
                request.getDuracionHoras(),
                request.getPrecio(),
                categoria
        );
    }

    public CursoResponse toResponse(Curso curso) {
        CategoriaResumenResponseDto categoriaResponse = categoriaMapper.toResumenRespuesta(curso.getCategoria());
        return new CursoResponse(
                curso.getId(),
                curso.getTitulo(),
                curso.getDuracionHoras(),
                curso.getPrecio(),
                curso.isActivo(),
                curso.isFree(),
                curso.isIntensive(),
                categoriaResponse
        );
    }

}
