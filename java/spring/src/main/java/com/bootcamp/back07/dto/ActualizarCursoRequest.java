package com.bootcamp.back07.dto;

import com.bootcamp.back07.model.Categoria;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

public class ActualizarCursoRequest {

    @NotBlank(message = "El titulo es obligatorio")
    private String titulo;
    @Positive(message = "La duración debe ser mayor que 0")
    private int duracionHoras;
    @PositiveOrZero(message = "El precio no puede ser negativo")
    private double precio;
    @NotNull
    private Long categoriaId;

    public ActualizarCursoRequest() {
    }

    public ActualizarCursoRequest(String titulo, int duracionHoras, double precio, Long categoriaId) {
        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
        this.categoriaId = categoriaId;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getDuracionHoras() {
        return duracionHoras;
    }

    public void setDuracionHoras(int duracionHoras) {
        this.duracionHoras = duracionHoras;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public Long getCategoria() {
        return categoriaId;
    }

    public void setCategoria(Long categoria) {
        this.categoriaId = categoria;
    }
}
