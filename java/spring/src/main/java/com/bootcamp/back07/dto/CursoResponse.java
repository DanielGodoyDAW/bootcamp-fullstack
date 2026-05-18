package com.bootcamp.back07.dto;

import com.bootcamp.back07.model.Categoria;

public class CursoResponse {
    private Long id;
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;
    private boolean gratuito;
    private boolean intensivo;
    private CategoriaResumenResponseDto categoria;

    public CursoResponse(Long id, String titulo, int duracionHoras, double precio, boolean activo, boolean gratuito, boolean intensivo, CategoriaResumenResponseDto categoria) {
        this.id = id;
        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
        this.activo = activo;
        this.categoria = categoria;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    public CategoriaResumenResponseDto getCategoria() {
        return categoria;
    }

    public boolean isGratuito() {
        return gratuito;
    }

    public boolean isIntensivo() {
        return intensivo;
    }

    public void setCategoria(CategoriaResumenResponseDto categoria) {
        this.categoria = categoria;
    }
}
