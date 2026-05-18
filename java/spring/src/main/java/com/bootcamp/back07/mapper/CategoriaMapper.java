package com.bootcamp.back07.mapper;

import com.bootcamp.back07.dto.ActualizarCategoriaRequestDto;
import com.bootcamp.back07.dto.CategoriaResponseDto;
import com.bootcamp.back07.dto.CategoriaResumenResponseDto;
import com.bootcamp.back07.dto.CrearCategoriaRequest;
import com.bootcamp.back07.model.Categoria;
import org.springframework.stereotype.Component;

@Component
public class CategoriaMapper {

    public Categoria toEntity(CrearCategoriaRequest request) {
        return new Categoria(
          request.getNombre(),
          request.getDescripcion()
        );
    }

    public Categoria toEntity(ActualizarCategoriaRequestDto request) {
        return new Categoria(
                request.getNombre(),
                request.getDescripcion()
        );
    }

    public CategoriaResponseDto toResponse(Categoria categoria) {
        return new CategoriaResponseDto(
                categoria.getId(),
                categoria.getNombre(),
                categoria.getDescripcion(),
                categoria.isActivo()
        );
    }

    public CategoriaResumenResponseDto toResumenRespuesta(Categoria categoria) {
        return new CategoriaResumenResponseDto(
          categoria.getId(),
          categoria.getNombre()
        );
    }
}
