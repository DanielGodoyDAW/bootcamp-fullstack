package com.bootcamp.spring.model;

public class Curso {
    private Long id;
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;

    public Curso(Long id, String titulo, int duracionHoras, double precio) {
        this.id = id;
        this.titulo = titulo;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
        this.activo = true;
    }

    public void activar(){
        this.activo = true;
    }
    public void desctivar(){
        this.activo = false;
    }

    //para que se muestren los datos tenemos que declarar los get
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
