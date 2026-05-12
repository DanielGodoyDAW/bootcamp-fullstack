package com.bootcamp.spring.dto;

public class CrearCursoRequest {
    private String titulo;
    private int duracionHoras;
    private Double precio;

    public CrearCursoRequest() {

    }

    public CrearCursoRequest(String titulo, int duracionHoras, double precio) {
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
