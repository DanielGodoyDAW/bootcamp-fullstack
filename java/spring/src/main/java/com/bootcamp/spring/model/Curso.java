package com.bootcamp.spring.model;

public class Curso {
    private Long id;
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;

    //TODO agregamos comprobaciones para que no introduzcan datos erroneos
    public Curso(Long id, String titulo, int duracionHoras, double precio) {
        if(id == null){
            throw new IllegalArgumentException("El id es obligatorio");
        }
        this.id = id;
        if(titulo == null || titulo.isBlank()){
            throw new IllegalArgumentException("El titulo es obligatorio");
        }
        this.titulo = titulo;
        if(duracionHoras <= 0){
            throw new IllegalArgumentException("El duracion horas es obligatorio");
        }
        this.duracionHoras = duracionHoras;
        if (precio < 0){
            throw new IllegalArgumentException("El precio no puede ser negativo");
        }
        this.precio = precio;
        this.activo = true;
    }

    //TODO ---- agregamos nueva funcionalidad
    public boolean esGratuito(){
        return precio == 0;
    }

    public boolean esIntensivo(){
        return  duracionHoras >= 80;
    }
    //TODO ----

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
