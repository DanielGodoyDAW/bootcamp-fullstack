package com.bootcamp.spring.dto;

public class CursoResponse {
    //declaramos las variables que queremos mostrar al usuario, en este caso el id, titulo, duracion horas, precio y activo
    private Long id;
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;
    private boolean gratuito;
    private boolean intensivo;

    //constructor con todos los parametros
    public CursoResponse(Long id, int duracionHoras, String titulo, double precio, boolean activo , boolean gratuito, boolean intensivo) {
        this.id = id;
        this.duracionHoras = duracionHoras;
        this.titulo = titulo;
        this.precio = precio;
        this.activo = activo;
    }

    //getters
    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getDuracionHoras() {
        return duracionHoras;
    }

    public double getPrecio() {
        return precio;
    }

    public boolean isActivo() {
        return activo;
    }
}
