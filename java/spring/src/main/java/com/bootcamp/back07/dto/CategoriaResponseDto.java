package com.bootcamp.back07.dto;

import jakarta.validation.constraints.NotBlank;

public class CategoriaResponseDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private boolean activo;

    public CategoriaResponseDto(Long id, String nombre, String descripcion, boolean activo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.activo = activo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Long getId() {
        return id;
    }

    public boolean isActivo() {
        return activo;
    }
}
