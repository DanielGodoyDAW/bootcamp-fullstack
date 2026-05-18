package com.bootcamp.back07.dto;

import jakarta.validation.constraints.NotBlank;

public class CrearCategoriaRequest {

    @NotBlank(message = "El nombre de la categoria es obligatorio")
    private String nombre;
    @NotBlank(message = "La descripción de la categoría es obligatorio")
    private String descripcion;

    public CrearCategoriaRequest(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
