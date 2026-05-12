package com.bootcamp.spring.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

public class ActualizarCursoRequest {
    //! agregamos la validacion
    @NotBlank(message = "El titulo es obligatorio")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "El titulo solo puede contener letras, numeros y espacios")
    private String titulo;
    @Positive(message = "La duracion horas debe ser mayor que 0")
    private int duracionHoras;
    @PositiveOrZero(message = "El precio no puede ser negativo")
    private Double precio;

    public ActualizarCursoRequest() {

    }

    public ActualizarCursoRequest(String titulo, int duracionHoras, double precio) {
        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
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

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
